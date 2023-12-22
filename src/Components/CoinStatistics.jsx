import React from "react";

const CoinStatistics = ({ coinData, name }) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    notation: "compact",
    currency: "USD",
    style: "currency",
  });

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const data = [
    {
      Price: USDollar.format(coinData.price),
      Icon: "https://cdn.coinranking.com/assets/3bc76b90ac5fa7a9d0ebb3eadd0db736.svg",
    },
    {
      Rank: coinData.rank,
      Icon: "https://cdn.coinranking.com/assets/71798b73ccd1acf2b7cecd584238b810.svg",
    },
    {
      "Volume 24h": formattedNumber.format(coinData["24hVolume"]),
      Icon: "https://cdn.coinranking.com/assets/b78e552433d71e96938327c805491a88.svg",
    },
    {
      "Market Cap": formattedNumber.format(coinData.marketCap),
      Icon: "https://cdn.coinranking.com/assets/393c694ac4e62408003ed1617d009626.svg",
    },
    {
      "Fully Diluted Market Cap": formattedNumber.format(
        coinData.fullyDilutedMarketCap
      ),
      Icon: "https://cdn.coinranking.com/assets/393c694ac4e62408003ed1617d009626.svg",
    },
    {
      "All-Time High": USDollar.format(coinData.allTimeHigh.price),
      Icon: "https://cdn.coinranking.com/assets/6dc3ae58ba61dc653ea96cfc969c581a.svg",
    },
  ];
  return (
    <>
      <div className=" border border-slate-900 rounded-lg p-3">
        <span className="text-2xl font-bold">{name}</span>
        <p className=" text-sm my-3">
          An overview showing the statistics of {coinData.name}, such as the
          base and quote currency, the rank, and trading volume.
        </p>
        {data.map((val, index) => (
          <div
            key={index}
            className="flex items-center justify-between mt-3 border-t border-slate-500 px-2"
          >
            <div className="flex gap-2 mt-3">
              <img src={val[Object.keys(val)[1]]} alt="icon" />
              <span className=" font-bold">{Object.keys(val)[0]}</span>
            </div>
            <span className="mt-3 font-semibold">
              {val[Object.keys(val)[0]]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoinStatistics;
