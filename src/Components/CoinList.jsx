import React, { useState, useEffect } from "react";
import SingleCoin from "./SingleCoin";
import Data from "../Data.json";

const CoinList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Data);
  }, []);

  return (
    <section>
      <div className="text-2xl font-bold mb-3 mt-3">Market</div>
      <div className="grid grid-cols-3 md:grid-cols-4 p-3 rounded-lg border-slate-900 border items-center">
        <div className=" text-xl font-bold">Name</div>
        <div className="text-center text-xl font-bold">Price</div>
        <div className="text-center text-xl font-bold">Last 24h</div>
        <div className="text-center text-xl font-bold hidden md:block">
          Market Cap
        </div>
      </div>
      {data.length > 0 ? (
        data.map((coin) => <SingleCoin key={coin.id} coin={coin} />)
      ) : (
        <div className="text-center mt-3 font-semibold text-xl">Loading...</div>
      )}
    </section>
  );
};

export default CoinList;
