import moment from "moment";
import React from "react";
import { useFormatNumber } from "../Hooks/formatNumber";

const CoinDetail = ({ coinData }) => {
  return (
    <>
      {Object.keys(coinData).length > 0 ? (
        <div className="border border-slate-900 rounded-lg p-3 mb-5">
          <div className=" flex items-center justify-between gap-2 ">
            <div className=" flex items-center gap-2 flex-wrap">
              <img
                src={coinData.iconUrl}
                alt={coinData.uuid}
                className=" rounded-full w-16"
              />
              <h1 className=" text-2xl font-bold">{coinData.name}</h1>
              <small>({coinData.symbol})</small>
              <span className=" border border-slate-900 rounded-md px-1">
                #{coinData.rank}
              </span>
            </div>
            <div className=" flex flex-col items-end ">
              <span className=" animate-pulse font-bold text-lg">
                {useFormatNumber(coinData.price)}
              </span>
              <span className=" border rounded-md px-1 text-xs border-slate-900 font-semibold">
                {moment.unix(coinData.priceAt).fromNow()}
              </span>
            </div>
          </div>
          <p className=" mt-3">{coinData.description}</p>
        </div>
      ) : (
        <div className="text-center mt-3 font-semibold text-xl">Loading...</div>
      )}
    </>
  );
};

export default CoinDetail;
