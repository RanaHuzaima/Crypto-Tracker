import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrendingCoin = () => {
  const [data, setData] = useState([]);
  const fetchdata = useCallback(async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
    const response = await res.json();
    setData(response.coins);
  }, []);

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div className="text-2xl font-bold mb-3">Today Trending</div>
      {data.length > 0 &&
        data.slice(0, 5).map((coins, i) => (
          <Link to={`/coin/${coins.item.id}`}>
            <div
              key={coins.item.id}
              className=" flex items-center border rounded-lg border-slate-900  p-2 gap-2 mb-2 hover:bg-gray-200 cursor-pointer "
            >
              <span className="text-lg font-semibold ">{i + 1})</span>
              <img
                src={coins.item.small}
                alt="coin-img"
                className=" rounded-full h-8"
              />
              <p className="text-xl font-semibold">{coins.item.name}</p>
            </div>
          </Link>
        ))}
    </>
  );
};

export default TrendingCoin;
