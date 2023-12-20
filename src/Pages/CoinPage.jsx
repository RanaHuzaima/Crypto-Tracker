import React, { useEffect, useState } from "react";
import HistoryChart from "../Components/HistoryChart";
import CoinDetail from "../Components/CoinDetail";
import { useParams } from "react-router-dom";
import CoinStatistics from "../Components/CoinStatistics";
import CoinSupply from "../Components/CoinSupply";
import CoinPriceHistory from "../Components/CoinPriceHistory";
import CoinCalculator from "../Components/CoinCalculator";

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
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
              <CoinPriceHistory coinData={coinData} />
              <CoinCalculator coinData={coinData} />
              <CoinStatistics
                coinData={coinData}
                name="Value Statistics"
                desp="An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume."
              />
              <CoinSupply
                coinData={coinData}
                name="Supply information"
                desp="View the total and circulating supply of Bitcoin, including details on how the supplies are calculated. "
              />
            </div>
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
