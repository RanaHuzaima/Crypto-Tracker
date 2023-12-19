import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ sparklineData, change }) => {
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
        display: false, // Hide x-axis labels
      },
      y: {
        display: false, // Hide y-axis labels
      },
    },
    responsive: true, // Prevents automatic resizing
    tooltips: {
      enabled: false, // Hide tooltips
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
