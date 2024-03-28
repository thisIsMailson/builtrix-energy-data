
import React, { memo } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const BarChartComponent = ({ data, filterOption }: { data?: any, filterOption: string }) => {
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
