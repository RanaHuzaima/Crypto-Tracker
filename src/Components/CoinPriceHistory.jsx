import moment from "moment";
import React, { useState } from "react";
import { useFormatNumber } from "../Hooks/formatNumber";

const CoinPriceHistory = ({ coinData, HistoryData }) => {
  const [page, setPage] = useState(1);
  const indexperpage = 5;
  const lastIndex = page * indexperpage;
  const firstIndex = lastIndex - indexperpage;
  const npage = Math.ceil(HistoryData.length / indexperpage);
  const number = [...Array(npage + 1).keys()].slice(1);

  const HandelNextPage = () => {
    if (page !== npage) {
      setPage(page + 1);
    }
  };
  const HandelPrevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const HandelchangePage = (n) => {
    setPage(n);
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
            HistoryData.slice(firstIndex, lastIndex).map((data) => (
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
            <ul className="flex items-center gap-2 justify-center">
              <li
                onClick={HandelPrevPage}
                className={`border rounded-lg cursor-pointer px-2 bg-[#126BFF] py-1 text-white ${
                  page == 1 ? " hidden" : " block"
                }`}
              >
                Prev
              </li>
              {number.slice(0, 5).map((n, i) => (
                <li
                  key={i}
                  className={`border rounded-lg cursor-pointer px-3 py-1 ${
                    page == n ? " bg-gray-400 " : "border-gray-500"
                  }`}
                  onClick={() => HandelchangePage(n)}
                >
                  {n}
                </li>
              ))}
              <li
                className={`border rounded-lg bg-[#126BFF] text-white cursor-pointer px-2 py-1 ${
                  page < 5 ? " block" : " hidden"
                }`}
                onClick={HandelNextPage}
              >
                Next
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinPriceHistory;
