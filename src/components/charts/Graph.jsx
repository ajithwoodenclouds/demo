import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "Jan", value: 8000 },
  { name: "Feb", value: 11598 },
  { name: "Mar", value: 9000 },
  { name: "Apr", value: 15000 },
  { name: "May", value: 25000 },
  { name: "Jun", value: 23000 },
];

// Custom Tooltip to display only the value
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <span>{`${payload[0].value}`}</span>;
  }
  return null;
};

// Graph Component
const Graph = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          {/* Shadow effect definition */}
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="5"
                floodColor="#5E88E5"
                floodOpacity="10"
              />
            </filter>
          </defs>

          {/* Axes */}
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 30000]} // Set the range from 0 to 30k
            ticks={[10000, 20000, 30000]} // Explicitly define the tick values
            tickFormatter={(value) => `${value / 1000}k`} // Format ticks as 'k'
          />

          {/* Tooltip with CustomTooltip */}
          <Tooltip
            formatter={(value) => `${value}`} // Just return the value
            content={<CustomTooltip />} // Use the custom tooltip
          />

          {/* Line with shadow and active dot */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#5E88E5"
            strokeWidth={2}
            filter="url(#shadow)" // Apply the shadow filter
            dot={false} // Remove the default dots
            activeDot={{
              r: 5, // Customize the size of the active dot
              stroke: "#5E88E5",
              strokeWidth: 2,
              fill: "#fff",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
