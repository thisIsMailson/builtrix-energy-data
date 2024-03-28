import React, { useState, useEffect } from "react";
import PieChartComponent from "./PiechartComponent";
import FilterComponent from "./Filter";

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const PieChartContainer = ({ data }: any) => {
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