import React from "react";
import TrendingHigh from "../Icons/TrendingHigh";
import { Link } from "react-router-dom";
import TrendingLow from "../Icons/TrendingLow";
import LineChart from "../Components/LineChart";

import { useFormatNumber } from "../Hooks/formatNumber";

const SingleCoin = ({ coin }) => {
  return (
    <>
      <Link to={`/coin/${coin.uuid}`}>
        <div
          key={coin.id}
          className="grid grid-cols-3 md:grid-cols-5 p-3 rounded-lg border-gray-200 border-b hover:bg-gray-200 items-center cursor-pointer"
        >
          <div className=" flex items-center gap-[3px] md:gap-2">
            <img
              className=" w-6 h-6 md:w-8 md:h-8 rounded-full"
              src={coin.iconUrl}
              alt={coin.name}
            />
            <span className=" sm:text-lg md:text-2xl font-semibold">
              {coin.name}
            </span>
          </div>
          <div className="text-center sm:text-lg md:text-xl font-semibold">
            {useFormatNumber(coin.price)}
          </div>
          <div
            className={` sm:text-lg md:text-xl font-semibold flex gap-1 justify-center ${
              coin.change > 0 ? " text-green-500" : "text-red-500"
            }`}
          >
            {coin.change > 0 ? <TrendingHigh /> : <TrendingLow />}
            {coin.change} %
          </div>
          <div className="text-center sm:text-lg md:text-xl font-semibold hidden md:block">
            {useFormatNumber(coin.marketCap)}
          </div>
          <div className={`px-7 ${"hidden md:flex lg:flex"}`}>
            <div className="mx-auto w-36">
              <LineChart sparklineData={coin.sparkline} change={coin.change} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleCoin;
