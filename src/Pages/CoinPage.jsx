import React from "react";
import HistoryChart from "../Components/HistoryChart";
import CoinDetail from "../Components/CoinDetail";

const CoinPage = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto p-4">
        <HistoryChart />
        <CoinDetail />
      </div>
    </section>
  );
};

export default CoinPage;
