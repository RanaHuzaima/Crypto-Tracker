import React from "react";

export const SkeletenLoadingCoinList = () => {
  return (
    <>
      <div className="animate-pulse rounded-lg overflow-hidden mt-1">
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
      <div className="animate-pulse rounded-lg overflow-hidden mt-1">
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
