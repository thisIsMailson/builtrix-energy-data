'use client'
import React, { useCallback, useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import FilterComponent from "../components/Filter";
import MapChartComponent from "../components/MapChart";
import PieChartContainer from "../components/PiechartContainer";
import MonthlyPieChartContainer from "../components/MonthlyBarChartContainer";


export default function Dashboard() {
  const [buildings, setBuildings] = useState([])
  const [monthBuildingData, setMonthBuildingData] = useState<string>('CPE_1')
  const [hourlyData, setHourlyData] = useState([])
  const [monthlyData, setMonthlyData] = useState([])
  const [mapData, setMapData] = useState([])


  const monthlyBuildingNames = [
    { Name: "CPE_1" },
    { Name: "CPE_2" },
    { Name: "CPE_3" },
    { Name: "CPE_4" },
    { Name: "CPE_5" },
    { Name: "CPE_6" }
  ];
  const getBuildings = useCallback(() => {
    fetch(
      `http://localhost:8000/api/building-names`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setBuildings(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const getHourlyData = useCallback(() => {
    fetch(
      `http://localhost:8000/api/hourly-aggregated-data`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setHourlyData(data.slice(-150))
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const getMonthData = useCallback(() => {
    fetch(
      `http://localhost:8000/api/monthly-aggregated-data`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMonthlyData(data.slice(-150))

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const getMapData = useCallback(() => {
    fetch(
      `http://localhost:8000/api/map`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMapData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  useEffect(() => {
    getBuildings()
    getHourlyData()
    getMonthData()
    getMapData()
  }, [getBuildings, getHourlyData, getMonthData, getMapData])



  return <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
    <div className="grid xl:grid-cols-1 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
      <FilterComponent options={monthlyBuildingNames} onSelectFilter={setMonthBuildingData} />
      <GridItem title={'Monthly Aggregated Data'}><BarChart data={monthlyData} filterOption={monthBuildingData} /></GridItem>
      <GridItem title={'Hourly Aggregated Data'}><LineChart data={hourlyData} /></GridItem>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-10 max-w-[1400px]">


        <PieChartContainer data={monthlyData} />

        <MonthlyPieChartContainer data={monthlyData} />
      </div>

      <MapChartComponent locations={mapData} />
    </div>
  </main>
}

const GridItem = ({ title, children }: { title: string, children?: React.ReactNode }) => {
  return <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    {children}
  </div>
}