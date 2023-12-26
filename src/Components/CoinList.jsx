import React, { useState, useEffect } from "react";
import SingleCoin from "./SingleCoin";
import { useSelector } from "react-redux";
import { SkeletenLoadingCoinList } from "./SkeletenLoading";
import CurrencySelect from "./CurrencySelect";
import TimeSelect from "./TimeSelect";
import { useSelectTime } from "../Redux/Slices/TimeSelectSlice.js";
import { useSelectCurrencySelect } from "../Redux/Slices/CurrencySelectSlice.js";
import { useQuery } from "@tanstack/react-query";
import { fetchListCoinData } from "../Hooks/FetchData.js";
import Pagination from "./Pagination.jsx";

const CoinList = () => {
  const [search, setSearch] = useState("");
  const { selectedTime } = useSelector(useSelectTime);
  const { selectedCurrency } = useSelector(useSelectCurrencySelect);

  const [page, setPage] = useState(1);
  const CoinPerPage = 10;

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["fetchListCoinData", selectedCurrency, selectedTime],
    queryFn: () => fetchListCoinData(selectedTime, selectedCurrency),
    staleTime: 10000,
  });

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    refetch();
  }, [selectedCurrency, selectedTime, refetch]);

  useEffect(() => {
    if (data) {
      const filteredCoins = data.filter((coin) =>
        search.toLowerCase() === ""
          ? true
          : coin.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredCoins);
      setPage(1);
    }
  }, [data, search]);

  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const nextPage = () => {
    if (page < Math.ceil(filteredData.length / CoinPerPage)) {
      setPage(page + 1);
    }
  };

  if (error) {
    return (
      <p className="text-center text-2xl font-bold">
        Error Fetching Data: {error.message}
      </p>
    );
  }

  return (
    <>
      <div className="mb-3 mt-3 flex justify-between items-center">
        <span className="text-2xl font-bold">Market</span>
        <div className="flex md:gap-2 gap-1">
          <input
            type="search"
            className="border border-slate-900 rounded-lg px-1 py-1 md:px-3 md:py-2 outline-none font-medium text-lg w-36 md:w-full"
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
        <div className="text-xl font-bold">Name</div>
        <div className="text-center text-xl font-bold">Price</div>
        <div className="text-center text-xl font-bold">Last {selectedTime}</div>
        <div className="text-center text-xl font-bold hidden md:block">
          Market Cap
        </div>
        <div className="text-center text-xl font-bold hidden md:block">
          Last {selectedTime}
        </div>
      </div>
      {isLoading ? (
        <SkeletenLoadingCoinList />
      ) : (
        <>
          {filteredData
            .slice((page - 1) * CoinPerPage, page * CoinPerPage)
            .map((coin) => (
              <SingleCoin key={coin.uuid} coin={coin} />
            ))}
          <Pagination
            page={page}
            totalPages={Math.ceil(filteredData.length / CoinPerPage)}
            prevPage={prevPage}
            changePage={changePage}
            nextPage={nextPage}
          />
        </>
      )}
    </>
  );
};

export default CoinList;
