import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinPriceHistory = ({ coinData }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const indexperpage = 5;
  const lastIndex = page * indexperpage;
  const firstIndex = lastIndex - indexperpage;
  const npage = Math.ceil(data.length / indexperpage);
  const number = [...Array(npage + 1).keys()].slice(1);

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const fetchData = async () => {
    const res = await fetch(
      `https://api.coinranking.com/v2/coin/${id}/history`
    );
    const result = await res.json();
    setData(result.data.history);
  };
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
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className=" border border-slate-900 rounded-lg p-3">
        <span className="text-2xl font-bold">Price performance</span>
        <p className=" text-sm my-3">
          This is the price performance of {coinData.name}{" "}
          <small>({coinData.symbol})</small>. It shows the price gains and
          losses for each time period.
        </p>
        {data &&
          data.slice(firstIndex, lastIndex).map((data) => (
            <div
              key={data.price}
              className={`flex items-center justify-between mt-3 border-slate-500 border rounded-lg p-2 ${
                coinData.price >= data.price ? "bg-[#FDE7EA]" : " bg-[#E6F7EE]"
              }`}
            >
              <div className="flex gap-2">
                <span className=" font-bold">
                  {moment.unix(data.timestamp).format("MMM Do,h:mm a")}
                </span>
              </div>
              <span className="font-semibold">
                {USDollar.format(data.price)}
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
    </>
  );
};

export default CoinPriceHistory;
