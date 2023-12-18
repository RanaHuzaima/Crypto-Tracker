import React from "react";
import TrendingCoin from "../Components/TrendingCoin";
import CoinList from "../Components/CoinList";

const HomePage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <TrendingCoin />
        <CoinList />
      </div>
    </>
  );
};

export default HomePage;
