package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

type User struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

// main function
func main() {
	//connect to database
	db, err := sql.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// create table if not exists
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, email TEXT)")
	if err != nil {
		log.Fatal(err)
	}

	// create router
	router := mux.NewRouter()
	router.HandleFunc("/api/go/users", getMapData(db)).Methods("GET")

	router.HandleFunc("/api/map", getMapData(db)).Methods("GET")
	router.HandleFunc("/api/monthly-aggregated-data", getMonthlyAggregatedData(db)).Methods("GET")
	router.HandleFunc("/api/emission-breakdown", getEmissionBreakdown(db)).Methods("GET")
	router.HandleFunc("/api/building-names", getBuildingNames(db)).Methods("GET")
	router.HandleFunc("/api/hourly-aggregated-data", getHourlyAggregatedData(db)).Methods("GET")

	// wrap the router with CORS and JSON content type middlewares
	enhancedRouter := enableCORS(jsonContentTypeMiddleware(router))

	// start server
	log.Fatal(http.ListenAndServe(":8000", enhancedRouter))
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set CORS headers
		w.Header().Set("Access-Control-Allow-Origin", "*") // Allow any origin
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Check if the request is for CORS preflight
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Pass down the request to the next middleware (or final handler)
		next.ServeHTTP(w, r)
	})

}

func jsonContentTypeMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set JSON Content-Type
		w.Header().Set("Content-Type", "application/json")
		next.ServeHTTP(w, r)
	})
}

type MapData struct {
	Cpe         string
	Lat         float64
	Lon         float64
	Name        string
	Fulladdress string
}

// getMapData function
func getMapData(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT cpe, lat, lon, name, fulladdress FROM metadata")
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		mapData := []MapData{}
		for rows.Next() {
			var data MapData
			if err := rows.Scan(&data.Cpe, &data.Lat, &data.Lon, &data.Name, &data.Fulladdress); err != nil {
				log.Fatal(err)
			}
			mapData = append(mapData, data)
		}
		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(mapData)
	}
}

// EmissionBreakdown represents the data needed for the Pie Chart Widget
type EmissionBreakdown struct {
	BuildingName string
	EmissionType string
	Percentage   float64
}

// getEmissionBreakdown function
func getEmissionBreakdown(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT name as building_name, emission_type, percentage FROM emission_breakdown")
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		emissionBreakdown := []EmissionBreakdown{}
		for rows.Next() {
			var breakdown EmissionBreakdown
			if err := rows.Scan(&breakdown.BuildingName, &breakdown.EmissionType, &breakdown.Percentage); err != nil {
				log.Fatal(err)
			}
			emissionBreakdown = append(emissionBreakdown, breakdown)
		}
		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(emissionBreakdown)
	}
}

// MonthlyAggregatedData represents the data needed for the Bar Chart Widget
type MonthlyAggregatedData struct {
	Month        int
	TotalEnergy  float64
	BuildingName string
}

// getMonthlyAggregatedData function
func getMonthlyAggregatedData(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT EXTRACT(MONTH FROM timestamp) as month, SUM(active_energy) as total_energy, cpe FROM smart_meter GROUP BY month, cpe")
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		monthlyAggregatedData := []MonthlyAggregatedData{}
		for rows.Next() {
			var aggregatedData MonthlyAggregatedData
			if err := rows.Scan(&aggregatedData.Month, &aggregatedData.TotalEnergy, &aggregatedData.BuildingName); err != nil {
				log.Fatal(err)
			}
			monthlyAggregatedData = append(monthlyAggregatedData, aggregatedData)
		}
		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(monthlyAggregatedData)
	}
}

// Building represents the data needed for the filter
type Building struct {
	Name string
}

// getBuildingNames function
func getBuildingNames(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT DISTINCT name FROM metadata")
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		buildingNames := []Building{}
		for rows.Next() {
			var building Building
			if err := rows.Scan(&building.Name); err != nil {
				log.Fatal(err)
			}
			buildingNames = append(buildingNames, building)
		}
		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(buildingNames)
	}
}

// HourlyAggregatedData represents the data needed for hourly aggregation
type HourlyAggregatedData struct {
	Timestamp    time.Time
	ActiveEnergy float64
}

// getHourlyAggregatedData function
func getHourlyAggregatedData(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Query to aggregate active_energy on an hourly basis
		query := `
            SELECT date_trunc('hour', timestamp) as timestamp, SUM(active_energy) as active_energy
            FROM smart_meter
            GROUP BY timestamp
            ORDER BY timestamp
        `

		rows, err := db.Query(query)
		if err != nil {
			log.Fatal(err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		hourlyAggregatedData := []HourlyAggregatedData{}
		for rows.Next() {
			var data HourlyAggregatedData
			if err := rows.Scan(&data.Timestamp, &data.ActiveEnergy); err != nil {
				log.Fatal(err)
				http.Error(w, "Internal Server Error", http.StatusInternalServerError)
				return
			}
			hourlyAggregatedData = append(hourlyAggregatedData, data)
		}
		if err := rows.Err(); err != nil {
			log.Fatal(err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		// Encode the result as JSON and send it in the response
		json.NewEncoder(w).Encode(hourlyAggregatedData)
	}
}
