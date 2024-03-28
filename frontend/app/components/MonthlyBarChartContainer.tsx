// MonthlyBarChartContainer.js
import React, { useState, useEffect } from "react";
import PieChartComponent from "./PiechartComponent";
import FilterComponent from "./Filter";

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const MonthlyPieChartContainer = ({ data }: any) => {
  const [filteredData, setFilteredData] = useState(data);
  const [buildingFilter, setBuildingFilter] = useState("");

  useEffect(() => {
    if (buildingFilter) {
      const filtered = data.filter((entry: any) => entry.BuildingName === buildingFilter);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, buildingFilter]);

  const handleBuildingFilterChange = (selectedBuilding: string) => {
    setBuildingFilter(selectedBuilding);
  };

  // Aggregate data by month for the selected building
  const aggregatedData = monthNames.map((month, index) => {
    const monthEnergy = filteredData.reduce((acc: number, curr: any) => {
      if (curr.Month === index + 1) {
        acc += curr.TotalEnergy;
      }
      return acc;
    }, 0);
    return {
      name: month,
      value: monthEnergy,
    };
  });

  return (
    <>

      <FilterComponent
        options={Array.from(new Set(data.map((item: any) => item.BuildingName))).map((building) => ({ Name: building }))}
        onSelectFilter={handleBuildingFilterChange}
      />
      <PieChartComponent data={aggregatedData} />
    </>
  );
};

export default MonthlyPieChartContainer;
