import React, { useEffect, useState } from "react";
import { SkeletenLoadingMarket } from "./SkeletenLoading";

const MarketDetail = () => {
  const [statsData, setStatsData] = useState([]);
  const formatNumber = (value = 0, currencySymbol = "") => {
    const absValue = Math.abs(Number(value)); // Convert value to a number

    const trillion = 1e12;
    const billion = 1e9;
    const million = 1e6;

    if (absValue >= trillion) {
      return `${currencySymbol}${(absValue / trillion).toFixed(2)} Trillion`;
    } else if (absValue >= billion) {
      return `${currencySymbol}${(absValue / billion).toFixed(2)} Billion`;
    } else if (absValue >= million) {
      return `${currencySymbol}${(absValue / million).toFixed(2)} Million`;
    } else {
      return `${currencySymbol}${absValue.toLocaleString("en-US")}`;
    }
  };
  const fetchData = async () => {
    const options = {
      headers: {
        "x-access-token": "",
      },
    };
    const res = await fetch("https://api.coinranking.com/v2/stats", options);
    const data = await res.json();
    setStatsData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!true) {
    return <SkeletenLoadingMarket />;
  }
  return (
    <>
      {setStatsData && (
        <section className=" flex md:gap-5 p-3 gap-2 items-center justify-between md:justify-start border border-slate-900 rounded-lg">
          <div className="flex flex-col">
            <span className=" md:text-lg text-sm  font-bold ">Market Cap</span>
            <span className=" text-sm  font-bold ">
              {formatNumber(statsData.totalMarketCap, "$")}
            </span>
          </div>
          <div className=" border-l-2 pl-1 text-sm border-slate-900 flex flex-col md:pl-5">
            <span className=" md:text-lg  font-bold">Trading Volume</span>
            <span className=" text-sm  font-bold ">
              {formatNumber(statsData.total24hVolume, "$")}
            </span>
          </div>
          <div className="border-l-2 text-sm pl-1 border-slate-900 flex flex-col md:pl-5">
            <span className=" md:text-lg  font-bold">All coins</span>
            <span className=" text-sm  font-bold ">{statsData.totalCoins}</span>
          </div>
          <div className="border-l-2 pl-5 border-slate-900 flex flex-col ">
            <span className=" hidden md:block md:text-lg  font-bold">
              Total Exchanges
            </span>
            <span className=" hidden md:block text-sm  font-bold ">
              {statsData.totalExchanges}
            </span>
          </div>
          <div className="border-l-2 pl-5 border-slate-900 flex flex-col ">
            <span className=" hidden md:block md:text-lg  font-bold">
              BTC Dominance
            </span>
            <span className=" hidden md:block text-sm  font-bold ">
              {formatNumber(statsData.btcDominance)} %
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default MarketDetail;
