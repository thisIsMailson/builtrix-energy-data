import React, { useState, useEffect } from "react";
import PieChartComponent from "./PiechartComponent";
import FilterComponent from "./Filter";

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const sampleData = [
    {
        "Month": 1,
        "TotalEnergy": 26975.275,
        "BuildingName": "CPE_1"
    },
    {
        "Month": 1,
        "TotalEnergy": 18474.15,
        "BuildingName": "CPE_2"
    },
    {
        "Month": 1,
        "TotalEnergy": 17206.55,
        "BuildingName": "CPE_3"
    },
    {
        "Month": 1,
        "TotalEnergy": 25636.3,
        "BuildingName": "CPE_4"
    },
    {
        "Month": 1,
        "TotalEnergy": 27591.14,
        "BuildingName": "CPE_5"
    },
    {
        "Month": 1,
        "TotalEnergy": 32342.65,
        "BuildingName": "CPE_6"
    },
    {
        "Month": 2,
        "TotalEnergy": 22034.975,
        "BuildingName": "CPE_1"
    },
    {
        "Month": 2,
        "TotalEnergy": 17078.5,
        "BuildingName": "CPE_2"
    },
    {
        "Month": 2,
        "TotalEnergy": 15149.55,
        "BuildingName": "CPE_3"
    },
    {
        "Month": 2,
        "TotalEnergy": 20907.3,
        "BuildingName": "CPE_4"
    },
    {
        "Month": 2,
        "TotalEnergy": 21619.33,
        "BuildingName": "CPE_5"
    },
    {
        "Month": 2,
        "TotalEnergy": 28497.15,
        "BuildingName": "CPE_6"
    },
    {
        "Month": 3,
        "TotalEnergy": 23620.05,
        "BuildingName": "CPE_1"
    },
    {
        "Month": 3,
        "TotalEnergy": 15252.15,
        "BuildingName": "CPE_2"
    },
    {
        "Month": 3,
        "TotalEnergy": 16373.25,
        "BuildingName": "CPE_3"
    },
    {
        "Month": 3,
        "TotalEnergy": 21461.45,
        "BuildingName": "CPE_4"
    },
    {
        "Month": 3,
        "TotalEnergy": 20890.49,
        "BuildingName": "CPE_5"
    },
    {
        "Month": 3,
        "TotalEnergy": 34037,
        "BuildingName": "CPE_6"
    },
    {
        "Month": 4,
        "TotalEnergy": 10595.35,
        "BuildingName": "CPE_1"
    },
    {
        "Month": 4,
        "TotalEnergy": 7084.05,
        "BuildingName": "CPE_2"
    },
    {
        "Month": 4,
        "TotalEnergy": 11909.55,
        "BuildingName": "CPE_3"
    },
    {
        "Month": 4,
        "TotalEnergy": 16453.8,
        "BuildingName": "CPE_4"
    },
    {
        "Month": 4,
        "TotalEnergy": 18161.32,
        "BuildingName": "CPE_5"
    },
    {
        "Month": 4,
        "TotalEnergy": 17509.55,
        "BuildingName": "CPE_6"
    },
    {
        "Month": 5,
        "TotalEnergy": 6817.35,
        "BuildingName": "CPE_1"
    },
    {
        "Month": 5,
        "TotalEnergy": 8251,
        "BuildingName": "CPE_2"
    },
    {
        "Month": 5,
        "TotalEnergy": 15793.2,
        "BuildingName": "CPE_3"
    },
    {
        "Month": 5,
        "TotalEnergy": 16371.75,
        "BuildingName": "CPE_4"
    },
    {
        "Month": 5,
        "TotalEnergy": 21590.68,
        "BuildingName": "CPE_5"
    },
    {
        "Month": 5,
        "TotalEnergy": 17850.4,
        "BuildingName": "CPE_6"
    },
    {
        "Month": 6,
        "TotalEnergy": 6563.35,
        "BuildingName": "CPE_1"
    },
    {
        "Month": 6,
        "TotalEnergy": 7737.1,
        "BuildingName": "CPE_2"
    },
    {
        "Month": 6,
        "TotalEnergy": 15929.9,
        "BuildingName": "CPE_3"
    },
    {
        "Month": 6,
        "TotalEnergy": 18773.65,
        "BuildingName": "CPE_4"
    },
    {
        "Month": 6,
        "TotalEnergy": 21882,
        "BuildingName": "CPE_5"
    },
    {
        "Month": 6,
        "TotalEnergy": 21386.1,
        "BuildingName": "CPE_6"
    },
    {
        "Month": 7,
        "TotalEnergy": 6183.65,
        "BuildingName": "CPE_1"
    },
    {
        "Month": 7,
        "TotalEnergy": 8191.5,
        "BuildingName": "CPE_2"
    },
    {
        "Month": 7,
        "TotalEnergy": 16322.35,
        "BuildingName": "CPE_3"
    },
    {
        "Month": 7,
        "TotalEnergy": 22142.6,
        "BuildingName": "CPE_4"
    },
    {
        "Month": 7,
        "TotalEnergy": 25218.78,
        "BuildingName": "CPE_5"
    },
    {
        "Month": 7,
        "TotalEnergy": 23172,
        "BuildingName": "CPE_6"
    },
    {
        "Month": 8,
        "TotalEnergy": 4873.05,
        "BuildingName": "CPE_1"
    },
    {
        "Month": 8,
        "TotalEnergy": 8272.85,
        "BuildingName": "CPE_2"
    },
    {
        "Month": 8,
        "TotalEnergy": 17263.9,
        "BuildingName": "CPE_3"
    },
    {
        "Month": 8,
        "TotalEnergy": 21342.35,
        "BuildingName": "CPE_4"
    }]
const PieChartContainer = ({ data }: any) => {
    if (!data || data.length === 0) {
        data = sampleData;
    }
    const [filteredData, setFilteredData] = useState(data);
    const [monthFilter, setMonthFilter] = useState("");

    useEffect(() => {
        if (monthFilter) {
            const filtered = data.filter((entry: any) => entry.Month === parseInt(monthFilter));
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [data, monthFilter]);

    const handleMonthFilterChange = (selectedMonth: string) => {
        setMonthFilter(selectedMonth);
    };

    const uniqueBuildingNames: string[] = Array.from(new Set(filteredData.map((item: { BuildingName: string }) => item.BuildingName)));

    // Aggregate data by building for the selected month
    const aggregatedData = uniqueBuildingNames.map((buildingName) => {
        const buildingEnergy = filteredData.reduce((acc: any, curr: any) => {
            if (curr.BuildingName === buildingName) {
                acc += curr.TotalEnergy;
            }
            return acc;
        }, 0);
        return {
            name: buildingName,
            value: buildingEnergy,
        };
    });

    return (
        <>
            <FilterComponent
                options={monthNames.map((month, index) => ({ Name: month, Value: index + 1 }))}
                onSelectFilter={handleMonthFilterChange}
            />
            <PieChartComponent data={aggregatedData} />
        </>
    );
};

export default PieChartContainer;