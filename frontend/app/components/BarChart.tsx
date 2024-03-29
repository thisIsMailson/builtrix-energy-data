
import React, { memo } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


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
const BarChartComponent = ({ data, filterOption }: { data?: any, filterOption: string }) => {
    if (!data || data.length === 0) {
        data = sampleData;
    }
    const processedData = preprocessData(data, filterOption);
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={processedData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Month" />
                <YAxis />
                <Tooltip content={<CostumeToolTip />} />
                <Legend />

                <Bar dataKey="TotalEnergy" fill="#8884d8" name="Total Energy" />
            </BarChart>
        </ResponsiveContainer>
    )
}

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

interface BarChartDataItem {
    Month: string;
    TotalEnergy: number;
    BuildingName: string;
}

const preprocessData = (data: BarChartDataItem[], selectedBuilding: string): BarChartDataItem[] => {
    const filteredData = data.filter(item => item.BuildingName === selectedBuilding);
    const uniqueMonths = Array.from(new Set(filteredData.map(item => monthNames[parseInt(item.Month) - 1])));
    return uniqueMonths.map((month, index) => ({
        Month: month,
        TotalEnergy: filteredData.filter(item => monthNames[parseInt(item.Month) - 1] === month)
            .reduce((total, item) => total + item.TotalEnergy, 0),
        BuildingName: selectedBuilding
    }));
};

const CostumeToolTip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg">{`${label}`}</p>
                <p className="text-sm text-blue-400">
                    Total Energy: <span className="ml-2">{`${payload[0].value}`}</span>
                </p>
            </div>
        )
    }
}
export default memo(BarChartComponent); 
