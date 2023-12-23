import React, { useState, useEffect } from "react";
import SingleCoin from "./SingleCoin";
import { useDispatch, useSelector } from "react-redux";

import { fetchData, useSelect } from "../Redux/Slices/CoinList";
import { SkeletenLoadingCoinList } from "./SkeletenLoading";
import CurrencySelect from "./CurrencySelect";
import TimeSelect from "./TimeSelect";
import { useSelectTime } from "../Redux/Slices/TimeSelect";
import { useSelectCurrencySelect } from "../Redux/Slices/CurrencySelect";

const CoinList = () => {
  const { isLoading, data, isError } = useSelector(useSelect);
  const [search, setSearch] = useState("");
  const { SelectedTime } = useSelector(useSelectTime);
  const { selectedCurrency } = useSelector(useSelectCurrencySelect);

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, SelectedTime, selectedCurrency]);

  if (isLoading) {
    return (
      <>
        <div className="mb-3 mt-3 flex justify-between items-center">
          <span className="text-2xl font-bold">Market</span>
          <div className=" flex gap-2">
            <input
              type="search"
              className=" border border-slate-900 rounded-lg px-3 py-2 outline-none font-medium text-lg  w-36 md:w-full"
              placeholder="Coin Name"
              pattern="[A-Za-z]*"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value.replace(/[^a-zA-Z]/g, ""))
              }
            />
            <CurrencySelect />
            <TimeSelect />
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 p-3 rounded-lg border-slate-900 border items-center">
          <div className=" text-xl font-bold">Name</div>
          <div className="text-center text-xl font-bold">Price</div>
          <div className="text-center text-xl font-bold">
            Last {SelectedTime}
          </div>
          <div className="text-center text-xl font-bold hidden md:block">
            Market Cap
          </div>
          <div className="text-center text-xl font-bold hidden md:block">
            Last {SelectedTime}
          </div>
        </div>
        <SkeletenLoadingCoinList />
      </>
    );
  }

  if (isError) {
    return (
      <p className=" text-center text-2xl font-bold">Error Fetching Data</p>
    );
  }
  return (
    <section>
      <div className="mb-3 mt-3 flex justify-between items-center">
        <span className="text-2xl font-bold">Market</span>
        <div className=" flex gap-2">
          <input
            type="search"
            className=" border border-slate-900 rounded-lg px-3 py-2 outline-none font-medium text-lg  w-36 md:w-full"
            placeholder="Coin Name"
            pattern="[A-Za-z]*"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value.replace(/[^a-zA-Z]/g, ""))
            }
          />
          <CurrencySelect />
          <TimeSelect />
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 p-3 rounded-lg border-slate-900 border items-center">
        <div className=" text-xl font-bold">Name</div>
        <div className="text-center text-xl font-bold">Price</div>
        <div className="text-center text-xl font-bold">Last {SelectedTime}</div>
        <div className="text-center text-xl font-bold hidden md:block">
          Market Cap
        </div>
        <div className="text-center text-xl font-bold hidden md:block">
          Last {SelectedTime}
        </div>
      </div>
      {data.length > 0 &&
        data
          .filter((coin) =>
            search.toLowerCase() === ""
              ? coin
              : coin.name.toLowerCase().includes(search)
          )
          .slice(firstIndex, lastIndex)
          .map((coin) => <SingleCoin key={coin.uuid} coin={coin} />)}
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
