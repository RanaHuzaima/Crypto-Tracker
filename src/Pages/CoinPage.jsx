import React, { useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useSelectTime } from "../Redux/Slices/TimeSelectSlice.js";
import { useSelectCurrencySelect } from "../Redux/Slices/CurrencySelectSlice.js";
import {
  fetchSingleCoinDetail,
  fetchSingleCoinHistory,
} from "../Hooks/FetchData.js";
import { SkeletenLoadingSingleCoin } from "../Components/SkeletenLoading.jsx";

// Lazy-loaded components
const HistoryChart = lazy(() => import("../Components/HistoryChart"));
const CoinDetail = lazy(() => import("../Components/CoinDetail"));
const CoinPriceHistory = lazy(() => import("../Components/CoinPriceHistory"));
const CoinCalculator = lazy(() => import("../Components/CoinCalculator"));
const CoinStatistics = lazy(() => import("../Components/CoinStatistics"));
const CoinSupply = lazy(() => import("../Components/CoinSupply"));

const CoinPage = () => {
  const { id } = useParams();
  const { selectedTime } = useSelector(useSelectTime);
  const { selectedCurrency } = useSelector(useSelectCurrencySelect);

  const {
    isLoading,
    error,
    data: SingleCoinData,
    refetch,
  } = useQuery({
    queryKey: ["SingleCoinData", id, selectedCurrency, selectedTime],
    queryFn: () => fetchSingleCoinDetail(id, selectedTime, selectedCurrency),
    staleTime: 10000,
  });

  const { data: HistoryData } = useQuery({
    queryKey: ["HistoryData", id, selectedCurrency, selectedTime],
    queryFn: () => fetchSingleCoinHistory(id, selectedTime, selectedCurrency),
    staleTime: 10000,
  });

  useEffect(() => {
    refetch();
  }, [id]);

  if (isLoading) {
    return (
      <>
        <div className="max-w-screen-xl mx-auto p-4">
          <SkeletenLoadingSingleCoin />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <p className="text-center text-2xl font-bold">
        Error Fetching Data: {error.message} <br /> Please Reload Again
      </p>
    );
  }

  return (
    <>
      <section>
        {SingleCoinData && (
          <div className="max-w-screen-xl mx-auto p-4">
            <div>
              <Suspense
                fallback={
                  <>
                    <SkeletenLoadingSingleCoin />
                  </>
                }
              >
                <HistoryChart sparklineData={SingleCoinData.sparkline} />
                <CoinDetail coinData={SingleCoinData} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
                  {HistoryData && (
                    <CoinPriceHistory
                      coinData={SingleCoinData}
                      HistoryData={HistoryData}
                    />
                  )}
                  <CoinCalculator coinData={SingleCoinData} />
                  <CoinStatistics
                    coinData={SingleCoinData}
                    name="Value Statistics"
                  />
                  <CoinSupply
                    coinData={SingleCoinData}
                    name="Supply Information"
                  />
                </div>
              </Suspense>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CoinPage;
