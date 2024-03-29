import React, { memo } from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const sampleData = [
    {
        "Timestamp": "2023-01-01T00:00:00Z",
        "ActiveEnergy": 15.3
    },
    {
        "Timestamp": "2023-01-01T00:00:00Z",
        "ActiveEnergy": 14.95
    },
    {
        "Timestamp": "2023-01-01T00:00:00Z",
        "ActiveEnergy": 15.15
    },
    {
        "Timestamp": "2023-01-01T00:00:00Z",
        "ActiveEnergy": 16.150000000000002
    },
    {
        "Timestamp": "2023-01-01T01:00:00Z",
        "ActiveEnergy": 14.35
    },
    {
        "Timestamp": "2023-01-01T01:00:00Z",
        "ActiveEnergy": 11.15
    },
    {
        "Timestamp": "2023-01-01T01:00:00Z",
        "ActiveEnergy": 11.05
    },
    {
        "Timestamp": "2023-01-01T01:00:00Z",
        "ActiveEnergy": 11.250000000000002
    },
    {
        "Timestamp": "2023-01-01T02:00:00Z",
        "ActiveEnergy": 9.55
    },
    {
        "Timestamp": "2023-01-01T02:00:00Z",
        "ActiveEnergy": 9.65
    },
    {
        "Timestamp": "2023-01-01T02:00:00Z",
        "ActiveEnergy": 9.35
    },
    {
        "Timestamp": "2023-01-01T02:00:00Z",
        "ActiveEnergy": 10.75
    },
    {
        "Timestamp": "2023-01-01T03:00:00Z",
        "ActiveEnergy": 12.3
    },
    {
        "Timestamp": "2023-01-01T03:00:00Z",
        "ActiveEnergy": 9.65
    },
    {
        "Timestamp": "2023-01-01T03:00:00Z",
        "ActiveEnergy": 9.5
    },
    {
        "Timestamp": "2023-01-01T03:00:00Z",
        "ActiveEnergy": 12.04
    },
    {
        "Timestamp": "2023-01-01T04:00:00Z",
        "ActiveEnergy": 12.77
    },
    {
        "Timestamp": "2023-01-01T04:00:00Z",
        "ActiveEnergy": 12.93
    },
    {
        "Timestamp": "2023-01-01T04:00:00Z",
        "ActiveEnergy": 12.940000000000001
    },
    {
        "Timestamp": "2023-01-01T04:00:00Z",
        "ActiveEnergy": 12.73
    },
    {
        "Timestamp": "2023-01-01T05:00:00Z",
        "ActiveEnergy": 13.32
    },
    {
        "Timestamp": "2023-01-01T05:00:00Z",
        "ActiveEnergy": 13.38
    },
    {
        "Timestamp": "2023-01-01T05:00:00Z",
        "ActiveEnergy": 12.28
    },
    {
        "Timestamp": "2023-01-01T05:00:00Z",
        "ActiveEnergy": 13.3
    },
    {
        "Timestamp": "2023-01-01T06:00:00Z",
        "ActiveEnergy": 12.82
    },
    {
        "Timestamp": "2023-01-01T06:00:00Z",
        "ActiveEnergy": 12.28
    },
    {
        "Timestamp": "2023-01-01T06:00:00Z",
        "ActiveEnergy": 11.97
    },
    {
        "Timestamp": "2023-01-01T06:00:00Z",
        "ActiveEnergy": 12.25
    },
    {
        "Timestamp": "2023-01-01T07:00:00Z",
        "ActiveEnergy": 12.52
    },
    {
        "Timestamp": "2023-01-01T07:00:00Z",
        "ActiveEnergy": 13.43
    },
    {
        "Timestamp": "2023-01-01T07:00:00Z",
        "ActiveEnergy": 14.17
    },
    {
        "Timestamp": "2023-01-01T07:00:00Z",
        "ActiveEnergy": 12.94
    },
    {
        "Timestamp": "2023-01-01T08:00:00Z",
        "ActiveEnergy": 17.04
    },
    {
        "Timestamp": "2023-01-01T08:00:00Z",
        "ActiveEnergy": 15.21
    },
    {
        "Timestamp": "2023-01-01T08:00:00Z",
        "ActiveEnergy": 15.59
    },
    {
        "Timestamp": "2023-01-01T08:00:00Z",
        "ActiveEnergy": 15.76
    },
    {
        "Timestamp": "2023-01-01T09:00:00Z",
        "ActiveEnergy": 18.38
    },
    {
        "Timestamp": "2023-01-01T09:00:00Z",
        "ActiveEnergy": 16.01
    },
    {
        "Timestamp": "2023-01-01T09:00:00Z",
        "ActiveEnergy": 17.16
    },
    {
        "Timestamp": "2023-01-01T09:00:00Z",
        "ActiveEnergy": 19.53
    },
    {
        "Timestamp": "2023-01-01T10:00:00Z",
        "ActiveEnergy": 15.65
    },
    {
        "Timestamp": "2023-01-01T10:00:00Z",
        "ActiveEnergy": 15.28
    },
    {
        "Timestamp": "2023-01-01T10:00:00Z",
        "ActiveEnergy": 15.24
    },
    {
        "Timestamp": "2023-01-01T10:00:00Z",
        "ActiveEnergy": 15.89
    },
    {
        "Timestamp": "2023-01-01T11:00:00Z",
        "ActiveEnergy": 15.55
    },
    {
        "Timestamp": "2023-01-01T11:00:00Z",
        "ActiveEnergy": 16.56
    },
    {
        "Timestamp": "2023-01-01T11:00:00Z",
        "ActiveEnergy": 15.36
    },
    {
        "Timestamp": "2023-01-01T11:00:00Z",
        "ActiveEnergy": 15.540000000000001
    },
    {
        "Timestamp": "2023-01-01T12:00:00Z",
        "ActiveEnergy": 16.14
    },
    {
        "Timestamp": "2023-01-01T12:00:00Z",
        "ActiveEnergy": 16.06
    },
    {
        "Timestamp": "2023-01-01T12:00:00Z",
        "ActiveEnergy": 16.7
    },
    {
        "Timestamp": "2023-01-01T12:00:00Z",
        "ActiveEnergy": 16.54
    },
    {
        "Timestamp": "2023-01-01T13:00:00Z",
        "ActiveEnergy": 16.5
    },
    {
        "Timestamp": "2023-01-01T13:00:00Z",
        "ActiveEnergy": 16.580000000000002
    },
    {
        "Timestamp": "2023-01-01T13:00:00Z",
        "ActiveEnergy": 16.4
    },
    {
        "Timestamp": "2023-01-01T13:00:00Z",
        "ActiveEnergy": 16.67
    },
    {
        "Timestamp": "2023-01-01T14:00:00Z",
        "ActiveEnergy": 15.69
    },
    {
        "Timestamp": "2023-01-01T14:00:00Z",
        "ActiveEnergy": 15.290000000000001
    },
    {
        "Timestamp": "2023-01-01T14:00:00Z",
        "ActiveEnergy": 15.18
    },
    {
        "Timestamp": "2023-01-01T14:00:00Z",
        "ActiveEnergy": 15.54
    },
    {
        "Timestamp": "2023-01-01T15:00:00Z",
        "ActiveEnergy": 17.240000000000002
    },
    {
        "Timestamp": "2023-01-01T15:00:00Z",
        "ActiveEnergy": 16.14
    },
    {
        "Timestamp": "2023-01-01T15:00:00Z",
        "ActiveEnergy": 17.88
    },
    {
        "Timestamp": "2023-01-01T15:00:00Z",
        "ActiveEnergy": 16.71
    },
    {
        "Timestamp": "2023-01-01T16:00:00Z",
        "ActiveEnergy": 18.52
    },
    {
        "Timestamp": "2023-01-01T16:00:00Z",
        "ActiveEnergy": 19.900000000000002
    },
    {
        "Timestamp": "2023-01-01T16:00:00Z",
        "ActiveEnergy": 17.82
    },
    {
        "Timestamp": "2023-01-01T16:00:00Z",
        "ActiveEnergy": 17.509999999999998
    },
    {
        "Timestamp": "2023-01-01T17:00:00Z",
        "ActiveEnergy": 18.54
    },
    {
        "Timestamp": "2023-01-01T17:00:00Z",
        "ActiveEnergy": 20.23
    },
    {
        "Timestamp": "2023-01-01T17:00:00Z",
        "ActiveEnergy": 21.06
    },
    {
        "Timestamp": "2023-01-01T17:00:00Z",
        "ActiveEnergy": 18.07
    },
    {
        "Timestamp": "2023-01-01T18:00:00Z",
        "ActiveEnergy": 17.47
    },
    {
        "Timestamp": "2023-01-01T18:00:00Z",
        "ActiveEnergy": 18.169999999999998
    },
    {
        "Timestamp": "2023-01-01T18:00:00Z",
        "ActiveEnergy": 17.82
    },
    {
        "Timestamp": "2023-01-01T18:00:00Z",
        "ActiveEnergy": 18
    },
    {
        "Timestamp": "2023-01-01T19:00:00Z",
        "ActiveEnergy": 18.11
    },
    {
        "Timestamp": "2023-01-01T19:00:00Z",
        "ActiveEnergy": 18.84
    },
    {
        "Timestamp": "2023-01-01T19:00:00Z",
        "ActiveEnergy": 18.04
    },
    {
        "Timestamp": "2023-01-01T19:00:00Z",
        "ActiveEnergy": 17.950000000000003
    },
    {
        "Timestamp": "2023-01-01T20:00:00Z",
        "ActiveEnergy": 20.52
    },
    {
        "Timestamp": "2023-01-01T20:00:00Z",
        "ActiveEnergy": 21.36
    },
    {
        "Timestamp": "2023-01-01T20:00:00Z",
        "ActiveEnergy": 20.14
    },
    {
        "Timestamp": "2023-01-01T20:00:00Z",
        "ActiveEnergy": 20.830000000000002
    },
    {
        "Timestamp": "2023-01-01T21:00:00Z",
        "ActiveEnergy": 19.19
    },
    {
        "Timestamp": "2023-01-01T21:00:00Z",
        "ActiveEnergy": 19.36
    },
    {
        "Timestamp": "2023-01-01T21:00:00Z",
        "ActiveEnergy": 19.57
    },
    {
        "Timestamp": "2023-01-01T21:00:00Z",
        "ActiveEnergy": 19.099999999999998
    },
    {
        "Timestamp": "2023-01-01T22:00:00Z",
        "ActiveEnergy": 18.95
    },
    {
        "Timestamp": "2023-01-01T22:00:00Z",
        "ActiveEnergy": 19.560000000000002
    },
    {
        "Timestamp": "2023-01-01T22:00:00Z",
        "ActiveEnergy": 18.86
    },
    {
        "Timestamp": "2023-01-01T22:00:00Z",
        "ActiveEnergy": 20.67
    },
    {
        "Timestamp": "2023-01-01T23:00:00Z",
        "ActiveEnergy": 17.689999999999998
    },
    {
        "Timestamp": "2023-01-01T23:00:00Z",
        "ActiveEnergy": 18.6
    },
    {
        "Timestamp": "2023-01-01T23:00:00Z",
        "ActiveEnergy": 20.16
    },
    {
        "Timestamp": "2023-01-01T23:00:00Z",
        "ActiveEnergy": 18.279999999999998
    },
    {
        "Timestamp": "2023-01-02T00:00:00Z",
        "ActiveEnergy": 18.94
    },
    {
        "Timestamp": "2023-01-02T00:00:00Z",
        "ActiveEnergy": 18.52
    },
    {
        "Timestamp": "2023-01-02T00:00:00Z",
        "ActiveEnergy": 19.29
    },
    {
        "Timestamp": "2023-01-02T00:00:00Z",
        "ActiveEnergy": 19.29
    },
    {
        "Timestamp": "2023-01-02T01:00:00Z",
        "ActiveEnergy": 12.2
    },
    {
        "Timestamp": "2023-01-02T01:00:00Z",
        "ActiveEnergy": 12.2
    },
    {
        "Timestamp": "2023-01-02T01:00:00Z",
        "ActiveEnergy": 16.77
    },
    {
        "Timestamp": "2023-01-02T01:00:00Z",
        "ActiveEnergy": 12.08
    },
    {
        "Timestamp": "2023-01-02T02:00:00Z",
        "ActiveEnergy": 12.8
    },
    {
        "Timestamp": "2023-01-02T02:00:00Z",
        "ActiveEnergy": 12.459999999999999
    },
    {
        "Timestamp": "2023-01-02T02:00:00Z",
        "ActiveEnergy": 12.9
    },
    {
        "Timestamp": "2023-01-02T02:00:00Z",
        "ActiveEnergy": 12.58
    },
    {
        "Timestamp": "2023-01-02T03:00:00Z",
        "ActiveEnergy": 12.100000000000001
    },
    {
        "Timestamp": "2023-01-02T03:00:00Z",
        "ActiveEnergy": 11.780000000000001
    },
    {
        "Timestamp": "2023-01-02T03:00:00Z",
        "ActiveEnergy": 11.74
    },
    {
        "Timestamp": "2023-01-02T03:00:00Z",
        "ActiveEnergy": 11.92
    },
    {
        "Timestamp": "2023-01-02T04:00:00Z",
        "ActiveEnergy": 13.16
    },
    {
        "Timestamp": "2023-01-02T04:00:00Z",
        "ActiveEnergy": 11.81
    },
    {
        "Timestamp": "2023-01-02T04:00:00Z",
        "ActiveEnergy": 12.71
    },
    {
        "Timestamp": "2023-01-02T04:00:00Z",
        "ActiveEnergy": 12.49
    },
    {
        "Timestamp": "2023-01-02T05:00:00Z",
        "ActiveEnergy": 12.81
    },
    {
        "Timestamp": "2023-01-02T05:00:00Z",
        "ActiveEnergy": 11.97
    },
    {
        "Timestamp": "2023-01-02T05:00:00Z",
        "ActiveEnergy": 12.33
    },
    {
        "Timestamp": "2023-01-02T05:00:00Z",
        "ActiveEnergy": 12.56
    },
    {
        "Timestamp": "2023-01-02T06:00:00Z",
        "ActiveEnergy": 12.94
    },
    {
        "Timestamp": "2023-01-02T06:00:00Z",
        "ActiveEnergy": 12.45
    },
    {
        "Timestamp": "2023-01-02T06:00:00Z",
        "ActiveEnergy": 14.16
    },
    {
        "Timestamp": "2023-01-02T06:00:00Z",
        "ActiveEnergy": 13.1
    },
    {
        "Timestamp": "2023-01-02T07:00:00Z",
        "ActiveEnergy": 13.200000000000001
    },
    {
        "Timestamp": "2023-01-02T07:00:00Z",
        "ActiveEnergy": 13.34
    },
    {
        "Timestamp": "2023-01-02T07:00:00Z",
        "ActiveEnergy": 13.120000000000001
    },
    {
        "Timestamp": "2023-01-02T07:00:00Z",
        "ActiveEnergy": 13.83
    },
    {
        "Timestamp": "2023-01-02T08:00:00Z",
        "ActiveEnergy": 15.93
    },
    {
        "Timestamp": "2023-01-02T08:00:00Z",
        "ActiveEnergy": 32.83
    },
    {
        "Timestamp": "2023-01-02T08:00:00Z",
        "ActiveEnergy": 29.18
    },
    {
        "Timestamp": "2023-01-02T08:00:00Z",
        "ActiveEnergy": 47.65
    },
    {
        "Timestamp": "2023-01-02T09:00:00Z",
        "ActiveEnergy": 122.77
    },
    {
        "Timestamp": "2023-01-02T09:00:00Z",
        "ActiveEnergy": 108.08
    },
    {
        "Timestamp": "2023-01-02T09:00:00Z",
        "ActiveEnergy": 115.81
    },
    {
        "Timestamp": "2023-01-02T09:00:00Z",
        "ActiveEnergy": 108.50999999999999
    },
    {
        "Timestamp": "2023-01-02T10:00:00Z",
        "ActiveEnergy": 103.97
    },
    {
        "Timestamp": "2023-01-02T10:00:00Z",
        "ActiveEnergy": 94.35
    },
    {
        "Timestamp": "2023-01-02T10:00:00Z",
        "ActiveEnergy": 103.23
    },
    {
        "Timestamp": "2023-01-02T10:00:00Z",
        "ActiveEnergy": 109.61
    },
    {
        "Timestamp": "2023-01-02T11:00:00Z",
        "ActiveEnergy": 91.85
    },
    {
        "Timestamp": "2023-01-02T11:00:00Z",
        "ActiveEnergy": 112.56
    }]
const LineChartComponent = ({ data }: { data: any }) => {
    if (!data || data.length === 0) {
        data = sampleData;
    }
    data = preprocessData(data);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={800} height={400} data={data} margin={{ right: 30 }}>
                <XAxis dataKey="Timestamp" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={<CostumeToolTip />} />
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
