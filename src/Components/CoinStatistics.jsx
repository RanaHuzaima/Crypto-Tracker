import React from "react";
import { useFormatNumber } from "../Hooks/formatNumber";

const CoinStatistics = ({ coinData, name }) => {
  const data = [
    {
      Price: useFormatNumber(coinData.price),
    },
    {
      Rank: coinData.rank,
    },
    {
      "Volume 24h": useFormatNumber(coinData["24hVolume"]),
    },
    {
      "Market Cap": useFormatNumber(coinData.marketCap),
    },
    {
      "Fully Diluted Market Cap": useFormatNumber(
        coinData.fullyDilutedMarketCap
      ),
    },
    {
      "All-Time High": useFormatNumber(coinData.allTimeHigh.price),
    },
  ];
  return (
    <>
      <div className=" border border-slate-900 rounded-lg p-3">
        <span className="text-2xl font-bold">{name}</span>
        <p className=" text-sm my-3">
          An overview showing the statistics of {coinData.name}, such as the
          base and quote currency, the rank, and trading volume.
        </p>
        {data.map((val, index) => (
          <div
            key={index}
            className="flex items-center justify-between mt-3 border-t border-slate-500 px-2"
          >
            <div className="flex mt-3 items-center justify-center">
              <span className="font-bold md:text-lg">
                {Object.keys(val)[0]}
              </span>
            </div>
            <span className="mt-3 font-semibold ">
              {val[Object.keys(val)[0]]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoinStatistics;
