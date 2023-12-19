import React from "react";
import { currencyFormat } from "../Utils";
import TrendingHigh from "../Icons/TrendingHigh";
import { Link } from "react-router-dom";
import TrendingLow from "../Icons/TrendingLow";

const SingleCoin = ({ coin }) => {
  return (
    <>
      <Link to={`/coin/${coin.id}`}>
        <div
          key={coin.id}
          className="grid grid-cols-3 md:grid-cols-5 p-3 rounded-lg border-gray-200 border-b hover:bg-gray-200 items-center cursor-pointer"
        >
          <div className=" flex items-center gap-[3px] md:gap-2">
            <img
              className="w-8 h-8 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
            <span className=" text-lg md:text-2xl font-semibold">
              {coin.name}
            </span>
          </div>
          <div className="text-center">
            {currencyFormat(coin.current_price)}
          </div>
          <div
            className={`flex gap-1 justify-center ${
              coin.price_change_percentage_1h_in_currency > 0
                ? " text-green-500"
                : "text-red-500"
            }`}
          >
            {coin.price_change_percentage_1h_in_currency > 0 ? (
              <TrendingHigh />
            ) : (
              <TrendingLow />
            )}
            {coin.price_change_percentage_1h_in_currency.toFixed(3)} %
          </div>
          {/* <div className="text-center">
            {coin..toFixed(3)}
          </div> */}
          <div
            className={`flex gap-1 justify-center ${
              coin.price_change_percentage_24h > 0
                ? " text-green-500"
                : "text-red-500"
            }`}
          >
            {coin.price_change_percentage_24h > 0 ? (
              <TrendingHigh />
            ) : (
              <TrendingLow />
            )}
            {coin.price_change_percentage_24h.toFixed(3)} %
          </div>
          <div className="text-center hidden md:block">
            {currencyFormat(coin.market_cap)}
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleCoin;
