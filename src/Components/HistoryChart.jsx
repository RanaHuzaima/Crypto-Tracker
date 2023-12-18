import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import moment from "moment";

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

const HistoryChart = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
    );
    const data = await res.json();
    const coincharData = data.prices.map((value) => ({
      x: value[0],
      y: value[1].toFixed(2),
    }));
    setData(coincharData);
    console.log(coincharData);
  };
  const options = {
    Responsive: true,
  };
  const chartdata = {
    labels: data.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: id,
        data: data.map((value) => value.y),
        borderColor: "rgb(29,78,216)",
        backgroundColor: "rgba(15, 103, 161, 0.273)",
      },
    ],
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div className="mb-5 h-[50vh]">
        <Line options={options} data={chartdata} />
      </div>
    </>
  );
};

export default HistoryChart;
