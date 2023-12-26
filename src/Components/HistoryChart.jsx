import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = ({ sparklineData }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        type: "category",
        labels: Array.from({ length: sparklineData.length }, (_, i) => {
          const hour = (i + 7) % 12 || 12;
          const ampm = i < 12 ? "PM" : "AM";
          return `${hour}:00 ${ampm}`;
        }),
      },
    },
  };

  const chartData = {
    labels: Array.from({ length: sparklineData.length }, (_, i) => i + 1),
    datasets: [
      {
        fill: true,
        data: sparklineData,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(
            0,
            0,
            0,
            ctx.chart.height
          );
          gradient.addColorStop(0.3, "rgba(18, 109, 255, 0.514)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          return gradient;
        },
        borderColor: "rgba(18, 109, 255, 0.61)",
        borderWidth: 2,
        pointColor: "#fff",
        pointRadius: 3,
        pointHoverRadius: 1,
        pointHighlightFill: "#fff",
      },
    ],
  };

  return (
    <div className="mb-5 md:mb-14 cursor-pointer">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default HistoryChart;
