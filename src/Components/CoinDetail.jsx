import React from "react";

const CoinDetail = ({ coinData }) => {
  return (
    <>
      {Object.keys(coinData).length > 0 ? (
        <div>
          <div className=" flex items-center gap-2 ">
            <img
              src={coinData.iconUrl}
              alt={coinData.uuid}
              className=" rounded-full w-16"
            />
            <h1 className=" text-2xl font-bold">{coinData.name}</h1>
          </div>
          <p
            className=" [&>a]:text-blue-400 [&>a]:underline"
            dangerouslySetInnerHTML={{ __html: coinData.description }}
          ></p>
        </div>
      ) : (
        <div className="text-center mt-3 font-semibold text-xl">Loading...</div>
      )}
    </>
  );
};

export default CoinDetail;
