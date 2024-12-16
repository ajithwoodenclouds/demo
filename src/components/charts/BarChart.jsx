import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Dec",
    ],
    datasets: [
      {
        label: "Orders",
        data: [
          12000, 25000, 15000, 30000, 10000, 26598, 12000, 20000, 15000, 5000,
          3000, 7000, 7000,
        ],
        backgroundColor: [
          "#95A4FC",
          "#BAEDBD",
          "#1C1C1C",
          "#B1E3FF",
          "#A8C5DA",
          "#A1E3CB",
          "#95A4FC",
          "#BAEDBD",
          "#1C1C1C",
          "#B1E3FF",
          "#A8C5DA",
          "#A1E3CB",
        ],
        borderRadius: 8,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value / 1000}K`,
        },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <div className="w-full px-4 ">
      <div className="w-full flex flex-col justify-center h-[400px] bg-white p-6 ">
        <h1>Orders statics</h1>
        <Bar
          data={data}
          options={options}
          width={1300}
          height={"400px"}
          style={{
            height: "400px",
            width: "1300px",
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
