import React, { useEffect, useState } from "react";
import HistoryChart from "../Components/HistoryChart";
import CoinDetail from "../Components/CoinDetail";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const fetchData = async () => {
    const options = {
      headers: {
        "x-access-token": "",
      },
    };
    try {
      const res = await fetch(
        `https://api.coinranking.com/v2/coin/${id}`,
        options
      );
      const result = await res.json();
      setCoinData(result.data.coin);
      console.log(result.data.coin.sparkline);
      setChartData(result.data.coin.sparkline);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section>
      <div className="max-w-screen-xl mx-auto p-4">
        {Object.keys(coinData).length > 0 ? (
          <div>
            <HistoryChart sparklineData={chartData} />
            <CoinDetail coinData={coinData} />
          </div>
        ) : (
          <div className="text-center mt-3 font-semibold text-xl">
            Loading...
          </div>
        )}
      </div>
    </section>
  );
};

export default CoinPage;
