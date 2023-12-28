import React, { lazy, Suspense } from "react";
import {
  SkeletenLoadingCoinList,
  SkeletenLoadingTrending,
} from "../Components/SkeletenLoading";

// Lazy-loaded components
const TrendingCoin = lazy(() => import("../Components/TrendingCoin"));
const CoinList = lazy(() => import("../Components/CoinList"));
const MarketDetail = lazy(() => import("../Components/MarketDetail"));

const DashboardPage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        {/* Lazy-loaded components wrapped in Suspense */}
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
