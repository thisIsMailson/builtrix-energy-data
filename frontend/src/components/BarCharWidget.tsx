import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartWidget = ({ data }) => {
  const buildingNames = Array.from(new Set(data.map((entry) => entry.BuildingName)));
  const months = Array.from(new Set(data.map((entry) => entry.Month)));

  const chartData = months.map((month) => {
    const entry = { Month: `Month ${month}` };
    buildingNames.forEach((buildingName) => {
      const matchingEntry = data.find((item) => item.Month === month && item.BuildingName === buildingName);
      entry[buildingName] = matchingEntry ? matchingEntry.TotalEnergy : 0;
    });
    return entry;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {buildingNames.map((buildingName, index) => (
          <Bar key={index} dataKey={buildingName} stackId="a" fill={`#${(index * 5) % 16}A0`} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartWidget;
