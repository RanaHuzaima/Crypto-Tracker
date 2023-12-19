import React from "react";

const MarketDetail = () => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "long",
  });
  return (
    <section className=" flex md:gap-5 p-3 items-center justify-between md:justify-start border border-slate-900 rounded-lg">
      <div className="flex flex-col pr-[3px]">
        <span className=" text-lg  font-bold ">Market Cap</span>
        <span className=" text-sm  font-bold ">$ 1.64 trillion</span>
      </div>
      <div className=" border-l-2 border-slate-900 flex flex-col pr-[3px] pl-[1px] md:pl-5">
        <span className=" text-lg  font-bold">Trading volume</span>
        <span className=" text-sm  font-bold ">
          {formattedNumber.format(56465125525)}
        </span>
      </div>
      <div className="border-l-2 border-slate-900 flex flex-col pl-[4px] md:pl-5">
        <span className=" text-lg  font-bold">All coins</span>
        <span className=" text-sm  font-bold ">32,865</span>
      </div>
      <div className="border-l-2 pl-5 border-slate-900 flex flex-col ">
        <span className=" hidden md:block text-lg  font-bold">
          Total Exchanges
        </span>
        <span className=" hidden md:block text-sm  font-bold ">169</span>
      </div>
    </section>
  );
};

export default MarketDetail;
