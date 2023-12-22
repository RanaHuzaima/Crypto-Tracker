import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  SkeletenLoadingMarket,
  SkeletenLoadingTrending,
} from "./SkeletenLoading";

const TrendingCoin = () => {
  const [bestCoinData, setBestCoinData] = useState([]);
  const [newCoinData, setNewCoinData] = useState([]);
  const fetchData = async () => {
    const options = {
      headers: {
        "x-access-token": "",
      },
    };
    const res = await fetch("https://api.coinranking.com/v2/stats", options);
    const data = await res.json();
    setBestCoinData(data.data.bestCoins);
    setNewCoinData(data.data.newestCoins);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (false) {
    return <SkeletenLoadingTrending />;
  }
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div className="  border border-slate-900 rounded-lg p-3">
          <div className="text-2xl font-bold mb-3">Top Best Coin</div>
          {bestCoinData.length > 0 &&
            bestCoinData.map((coins, i) => (
              <div key={coins.uuid}>
                <Link to={`/coin/${coins.uuid}`}>
                  <div className=" flex items-center border rounded-lg border-slate-900  p-2 gap-2 mb-2 hover:bg-gray-200 cursor-pointer ">
                    <span className="text-lg font-semibold ">{i + 1})</span>
                    <img
                      src={coins.iconUrl}
                      alt="coin-img"
                      className=" rounded-full h-8"
                    />
                    <p className="text-xl font-semibold">{coins.name}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div className="border border-slate-900 rounded-lg p-3">
          <div className="text-2xl font-bold mb-3">Top New Coin</div>
          {newCoinData.length > 0 &&
            newCoinData.map((coins, i) => (
              <div key={coins.uuid}>
                <Link to={`/coin/${coins.uuid}`}>
                  <div className=" flex items-center border rounded-lg border-slate-900  p-2 gap-2 mb-2 hover:bg-gray-200 cursor-pointer ">
                    <span className="text-lg font-semibold ">{i + 1})</span>
                    <img
                      src={coins.iconUrl}
                      alt="coin-img"
                      className=" rounded-full h-8"
                    />
                    <p className="text-xl font-semibold">{coins.name}</p>
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
