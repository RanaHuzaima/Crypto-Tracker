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

const HistoryChart = ({ sparklineData, change }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    // maintainAspectRatio: false,
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
          gradient.addColorStop(
            0,
            change > 0 ? "rgba(0, 255, 0, 0.4)" : "rgba(166, 8, 8, 0.4)"
          );
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          return gradient;
        },
        borderColor:
          change > 0 ? "rgba(0, 255, 0, 0.4)" : "rgba(166, 8, 8, 0.4)",
        borderWidth: 3,
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
