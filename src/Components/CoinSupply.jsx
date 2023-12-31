import React from "react";

const CoinSupply = ({ coinData, name }) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "long",
  });

  const data = [
    {
      "Total Supply": formattedNumber.format(coinData.supply.total),
    },
    {
      "Max Supply": formattedNumber.format(coinData.supply.max),
    },
    {
      "Circulating supply": formattedNumber.format(coinData.supply.circulating),
    },
    {
      "Issuance Blockchain": coinData.name,
    },
  ];
  return (
    <>
      <div className=" border border-slate-900 rounded-lg p-3">
        <span className="text-2xl font-bold">{name}</span>
        <p className=" text-sm my-3">
          View the total and circulating supply of {coinData.name}, including
          details on how the supplies are calculated.
        </p>
        {data.map((val, index) => (
          <div
            key={index}
            className="flex items-center justify-between mt-3 border-t border-slate-500 px-2"
          >
            <div className="flex gap-2 mt-3">
              <span className=" font-bold">{Object.keys(val)[0]}</span>
            </div>
            <span className="mt-3 font-semibold">
              {val[Object.keys(val)[0]]}
              <small> ({coinData.symbol})</small>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoinSupply;
