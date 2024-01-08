import React, { lazy, Suspense, useEffect } from "react";
import {
  SkeletenLoadingCoinList,
  SkeletenLoadingTrending,
} from "../Components/SkeletenLoading";

const TrendingCoin = lazy(() => import("../Components/TrendingCoin"));
const CoinList = lazy(() => import("../Components/CoinList"));
const MarketDetail = lazy(() => import("../Components/MarketDetail"));

const DashboardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <Suspense
          fallback={
            <>
              <SkeletenLoadingTrending />
              <SkeletenLoadingCoinList />
            </>
          }
        >
          <TrendingCoin />
          <MarketDetail />
          <CoinList />
        </Suspense>
      </div>
    </>
  );
};

export default DashboardPage;
