import React, { useEffect } from "react";
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

const LineChart = ({ sparklineData, change }) => {
  useEffect(() => {
    return () => {
      // Cleanup: Destroy the chart instance when the component unmounts
      const chartInstance = document.getElementById("line-chart");
      if (chartInstance) {
        chartInstance.chart.destroy();
      }
    };
  }, []);

  const data = {
    labels: Array.from({ length: sparklineData.length }, (_, i) => i + 1),
    datasets: [
      {
        fill: true,
        lineTension: 0.1,
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
        borderWidth: 1,
        pointColor: "#fff",
        pointRadius: 0,
        pointHoverRadius: 0,
        pointHighlightFill: "#fff",
        data: sparklineData.map((value) => parseFloat(value)),
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: "category", // Add this line to specify the scale type
        display: false,
      },
      y: {
        display: false,
      },
    },
    responsive: true,
    tooltips: {
      enabled: false,
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
