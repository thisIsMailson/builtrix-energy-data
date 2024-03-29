// MonthlyBarChartContainer.js
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
const MonthlyPieChartContainer = ({ data }: any) => {
  if (!data || data.length === 0) {
    data = sampleData;
  }
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
