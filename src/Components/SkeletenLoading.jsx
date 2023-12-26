import React from "react";

export const SkeletenLoadingCoinList = () => {
  return (
    <>
      <div className="animate-pulse rounded-lg overflow-hidden mt-1 border border-slate-900">
        <div className="grid grid-cols-3 md:grid-cols-5 p-3 bg-gray-400 gap-2 items-center h-20 w-full">
          <div className="bg-gray-500 h-8 rounded-lg"></div>
          <div className="bg-gray-500 h-8 rounded-lg"></div>
          <div className="flex gap-1 justify-center bg-gray-500 h-8 rounded-lg"></div>
          <div className="hidden md:block bg-gray-500 h-8 rounded-lg"></div>
          <div className="px-7 hidden md:block bg-gray-500 h-8 rounded-lg "></div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 p-3 bg-gray-400 gap-2 items-center h-20 w-full">
          <div className="bg-gray-500 h-8 rounded-lg"></div>
          <div className="bg-gray-500 h-8 rounded-lg"></div>
          <div className="flex gap-1 justify-center bg-gray-500 h-8 rounded-lg"></div>
          <div className="hidden md:block bg-gray-500 h-8 rounded-lg"></div>
          <div className="px-7 hidden md:block bg-gray-500 h-8 rounded-lg "></div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 p-3 bg-gray-400 gap-2 items-center h-20 w-full">
          <div className="bg-gray-500 h-8 rounded-lg"></div>
          <div className="bg-gray-500 h-8 rounded-lg"></div>
          <div className="flex gap-1 justify-center bg-gray-500 h-8 rounded-lg"></div>
          <div className="hidden md:block bg-gray-500 h-8 rounded-lg"></div>
          <div className="px-7 hidden md:block bg-gray-500 h-8 rounded-lg "></div>
        </div>
      </div>
    </>
  );
};

export const SkeletenLoadingMarket = () => {
  return (
    <>
      <div className="animate-pulse rounded-lg overflow-hidden mt-1 border border-slate-900">
        <div className="flex md:gap-5 p-3 gap-2 items-center justify-between md:justify-start border bg-gray-400 h-20 w-full">
          <div className="bg-gray-500 h-12  w-32 rounded-lg"></div>
          <div className="bg-gray-500 h-12 w-32 rounded-lg"></div>
          <div className="flex gap-1 justify-center bg-gray-500 h-12 w-32 rounded-lg"></div>
          <div className="hidden md:block bg-gray-500 w-32 h-12 rounded-lg"></div>
          <div className="px-7 hidden md:block w-32 bg-gray-500 h-12 rounded-lg "></div>
        </div>
      </div>
    </>
  );
};
export const SkeletenLoadingTrending = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 animate-pulse rounded-lg overflow-hidden">
        <div className="  border border-slate-900 rounded-lg p-3 bg-gray-400">
          <div className=" bg-gray-500 h-14 w-40 rounded-lg mb-2"></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
        </div>
        <div className="  border border-slate-900 rounded-lg p-3 bg-gray-400">
          <div className=" bg-gray-500 h-14 w-40 rounded-lg mb-2"></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
        </div>
      </div>
    </>
  );
};

export const SkeletenLoadingSingleCoin = () => {
  return (
    <>
      <div className="animate-pulse mb-7 rounded-lg overflow-hidden mt-1 border border-slate-900">
        <div className="p-3 bg-gray-500 h-96 w-full"></div>
      </div>
      <div className="animate-pulse mb-7 rounded-lg overflow-hidden mt-1 border border-slate-900">
        <div className="bg-gray-400 h-24 w-full"></div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 animate-pulse rounded-lg overflow-hidden">
        <div className="  border border-slate-900 rounded-lg p-3 bg-gray-400">
          <div className=" bg-gray-500 h-14 w-56 rounded-lg mb-2"></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
        </div>
        <div className="  border border-slate-900 rounded-lg p-3 bg-gray-400">
          <div className=" bg-gray-500 h-14 w-56 rounded-lg mb-2"></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
          <div className=" flex items-center border rounded-lg bg-gray-500 h-14 border-slate-900  p-2 gap-2 mb-2  "></div>
        </div>
      </div>
    </>
  );
};
