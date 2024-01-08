import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SkeletenLoadingTrending } from "./SkeletenLoading";
import { useSelector } from "react-redux";

import { useSelectCurrencySelect } from "../Redux/Slices/CurrencySelectSlice.js";
import { useQuery } from "@tanstack/react-query";
import { fetchStatsData } from "../Hooks/FetchData.js";

const TrendingCoin = () => {
  const { selectedCurrency } = useSelector(useSelectCurrencySelect);

  const {
    isLoading,
    error,
    data: CoinStatsdata,
    refetch,
  } = useQuery({
    queryKey: ["TrendingCoin", selectedCurrency],
    queryFn: () => fetchStatsData(selectedCurrency),
    staleTime: 10000,
  });

  useEffect(() => {
    refetch();
  }, []);
  if (isLoading) {
    return <SkeletenLoadingTrending />;
  }
  if (error) {
    return (
      <p className=" text-center text-2xl font-bold">Error Fetching Data</p>
    );
  }
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div className="  border border-slate-900 rounded-lg p-3">
          <div className="text-2xl font-bold mb-3">Top Best Coin</div>
          {CoinStatsdata.bestCoins &&
            CoinStatsdata.bestCoins.map((coins, i) => (
              <div key={coins.uuid}>
                <Link to={`/coin/${coins.uuid}`}>
                  <div className=" flex items-center border rounded-lg border-slate-900  p-2 gap-2 mb-2 hover:bg-gray-200 cursor-pointer ">
                    <span className="text-lg font-semibold ">{i + 1})</span>
                    <img
                      src={coins.iconUrl}
                      alt="coin-img"
                      className=" rounded-full w-6 h-6 md:h-8 md:w-8"
                    />
                    <p className="text-lg md:text-xl font-semibold">
                      {coins.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div className="border border-slate-900 rounded-lg p-3">
          <div className="text-2xl font-bold mb-3">Top New Coin</div>
          {CoinStatsdata.newestCoins &&
            CoinStatsdata.newestCoins.map((coins, i) => (
              <div key={coins.uuid}>
                <Link to={`/coin/${coins.uuid}`}>
                  <div className=" flex items-center border rounded-lg border-slate-900  p-2 gap-2 mb-2 hover:bg-gray-200 cursor-pointer ">
                    <span className="text-lg font-semibold ">{i + 1})</span>
                    <img
                      src={coins.iconUrl}
                      alt="coin-img"
                      className=" rounded-full w-6 h-6 md:h-8 md:w-8"
                    />
                    <p className="text-lg md:text-xl font-semibold">
                      {coins.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TrendingCoin;
