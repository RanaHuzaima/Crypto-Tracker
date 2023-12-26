import moment from "moment";
import React, { useState } from "react";
import { useFormatNumber } from "../Hooks/formatNumber";
import Pagination from "./Pagination";

const CoinPriceHistory = ({ coinData, HistoryData }) => {
  const [page, setPage] = useState(1);
  const indexperpage = 5;

  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const nextPage = () => {
    if (page < Math.ceil(HistoryData.length / indexperpage)) {
      setPage(page + 1);
    }
  };

  return (
    <>
      {HistoryData && (
        <div className=" border border-slate-900 rounded-lg p-3">
          <span className="text-2xl font-bold">Price performance</span>
          <p className=" text-sm my-3">
            This is the price performance of {coinData.name}{" "}
            <small>({coinData.symbol})</small>. It shows the price gains and
            losses for each time period.
          </p>
          {HistoryData &&
            HistoryData.slice(
              (page - 1) * indexperpage,
              page * indexperpage
            ).map((data) => (
              <div
                key={data.timestamp}
                className={`flex items-center justify-between mt-3 border-slate-500 border rounded-lg p-2 ${
                  coinData.price >= data.price
                    ? "bg-[#FDE7EA]"
                    : " bg-[#E6F7EE]"
                }`}
              >
                <div className="flex gap-2">
                  <span className=" font-bold">
                    {moment.unix(data.timestamp).format("MMM Do,h:mm a")}
                  </span>
                </div>
                <span className="font-semibold">
                  {useFormatNumber(data.price)}
                </span>
              </div>
            ))}
          <div className=" mt-2">
            <Pagination
              page={page}
              totalPages={6}
              prevPage={prevPage}
              changePage={changePage}
              nextPage={nextPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CoinPriceHistory;
