import React from "react";
import { SkeletenLoadingMarket } from "./SkeletenLoading";
import { useSelector } from "react-redux";
import { useSelectCoinStats } from "../Redux/Slices/CoinStats";
import { useSelectCurrencySign } from "../Redux/Slices/CurrencySign";

const MarketDetail = () => {
  const { isLoading, isError, CoinStatsdata } = useSelector(useSelectCoinStats);
  const { selectedSign } = useSelector(useSelectCurrencySign);

  const formatNumber = (value = 0) => {
    const absValue = Math.abs(Number(value).toFixed(2)); // Convert value to a number

    const trillion = 1e12;
    const billion = 1e9;
    const million = 1e6;

    if (absValue >= trillion) {
      return `${selectedSign}${(absValue / trillion).toFixed(2)} Trillion`;
    } else if (absValue >= billion) {
      return `${selectedSign}${(absValue / billion).toFixed(2)} Billion`;
    } else if (absValue >= million) {
      return `${selectedSign}${(absValue / million).toFixed(2)} Million`;
    } else {
      return `${absValue.toLocaleString("en-US")}`;
    }
  };

  if (isLoading) {
    return <SkeletenLoadingMarket />;
  }
  if (isError) {
    return (
      <p className=" text-center text-2xl font-bold">Error Fetching Data</p>
    );
  }
  return (
    <>
      {CoinStatsdata && (
        <section className=" flex md:gap-5 p-3 gap-2 items-center justify-between md:justify-start border border-slate-900 rounded-lg">
          <div className="flex flex-col">
            <span className=" md:text-lg text-sm  font-bold ">Market Cap</span>
            <span className=" text-sm  font-bold ">
              {formatNumber(CoinStatsdata.totalMarketCap)}
            </span>
          </div>
          <div className=" border-l-2 pl-1 text-sm border-slate-900 flex flex-col md:pl-5">
            <span className=" md:text-lg  font-bold">Trading Volume</span>
            <span className=" text-sm  font-bold ">
              {formatNumber(CoinStatsdata.total24hVolume)}
            </span>
          </div>
          <div className="border-l-2 text-sm pl-1 border-slate-900 flex flex-col md:pl-5">
            <span className=" md:text-lg  font-bold">All coins</span>
            <span className=" text-sm  font-bold ">
              {CoinStatsdata.totalCoins}
            </span>
          </div>
          <div className="border-l-2 pl-5 border-slate-900 flex flex-col ">
            <span className=" hidden md:block md:text-lg  font-bold">
              Total Exchanges
            </span>
            <span className=" hidden md:block text-sm  font-bold ">
              {CoinStatsdata.totalExchanges}
            </span>
          </div>
          <div className="border-l-2 pl-5 border-slate-900 flex flex-col ">
            <span className=" hidden md:block md:text-lg  font-bold">
              BTC Dominance
            </span>
            <span className=" hidden md:block text-sm  font-bold ">
              {formatNumber(CoinStatsdata.btcDominance)} %
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default MarketDetail;
