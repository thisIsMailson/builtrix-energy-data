import React, { memo } from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const LineChartComponent = ({ data }: { data: any }) => {
    data = preprocessData(data);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={800} height={400} data={data} margin={{ right: 30 }}>
                <XAxis dataKey="Timestamp" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={<CostumeToolTip />}/>
                <Legend />

                <Line
                    type="monotone"
                    dataKey="ActiveEnergy"
                    fill="#3b82f8" />
            </LineChart>
        </ResponsiveContainer>
    )
}

const preprocessData = (data: any[]): any[] => {
    return data.map((item: any) => ({
        ...item,
        Timestamp: item.Timestamp.slice(0, 7)
    }));
}

const CostumeToolTip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg">{`${label}`}</p>
                <p className="text-sm text-blue-400">
                    Active energy: <span className="ml-2">{`${payload[0].value}`}</span>
                </p>
            </div>
        )
    }
}
export default memo(LineChartComponent); 
