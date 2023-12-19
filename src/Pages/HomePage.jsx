import React from "react";
import TrendingCoin from "../Components/TrendingCoin";
import CoinList from "../Components/CoinList";
import MarketDetail from "../Components/MarketDetail";

const HomePage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <TrendingCoin />
        <MarketDetail />
        <CoinList />
      </div>
    </>
  );
};

export default HomePage;
