import React, { useState, useEffect } from "react";
import SingleCoin from "./SingleCoin";

const CoinList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const coinPerPage = 10;
  const lastIndex = page * coinPerPage;
  const firstIndex = lastIndex - coinPerPage;
  const npage = Math.ceil(data.length / coinPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);

  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const changePage = (n) => {
    setPage(n);
  };
  const nextPage = () => {
    if (page !== npage) {
      setPage(page + 1);
    }
  };

  const fetchData = async () => {
    const options = {
      headers: {
        "x-access-token": "",
      },
    };
    const res = await fetch(
      "https://api.coinranking.com/v2/coins?limit=100",
      options
    );
    const data = await res.json();
    setData(data.data.coins);
    console.log(data.data.coins);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="text-2xl font-bold mb-3 mt-3">Market</div>
      <div className="grid grid-cols-3 md:grid-cols-5 p-3 rounded-lg border-slate-900 border items-center">
        <div className=" text-xl font-bold">Name</div>
        <div className="text-center text-xl font-bold">Price</div>
        <div className="text-center text-xl font-bold">Last 24h</div>
        <div className="text-center text-xl font-bold hidden md:block">
          Market Cap
        </div>
        <div className="text-center text-xl font-bold hidden md:block">
          Last 24h
        </div>
      </div>
      {data.length > 0 ? (
        data
          .slice(firstIndex, lastIndex)
          .map((coin) => <SingleCoin key={coin.uuid} coin={coin} />)
      ) : (
        <div className="text-center mt-3 font-semibold text-xl">Loading...</div>
      )}
      <div>
        <ul className=" flex items-center justify-center gap-2 mt-4 mb-2 flex-wrap">
          <li
            className={`border px-3 py-1 rounded-lg border-slate-900 ${
              page > 1 ? "block" : "hidden"
            } cursor-pointer`}
            onClick={prevPage}
          >
            Prev
          </li>
          {number.map((n, i) => (
            <li
              className={`border px-3 py-1 rounded-lg border-slate-900 ${
                page === n ? " bg-gray-300" : ""
              } cursor-pointer `}
              key={i}
              onClick={() => changePage(n)}
            >
              {n}
            </li>
          ))}
          <li
            className={`border px-3 py-1 rounded-lg border-slate-900 ${
              page < 10 ? "block" : "hidden"
            } cursor-pointer`}
            onClick={nextPage}
          >
            Next
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CoinList;
