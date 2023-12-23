import React, { useEffect, useState } from "react";
import HistoryChart from "../Components/HistoryChart";
import CoinDetail from "../Components/CoinDetail";
import { useParams } from "react-router-dom";
import CoinStatistics from "../Components/CoinStatistics";
import CoinSupply from "../Components/CoinSupply";
import CoinPriceHistory from "../Components/CoinPriceHistory";
import CoinCalculator from "../Components/CoinCalculator";
import { useDispatch, useSelector } from "react-redux";
import {
  SingleFetchData,
  useSelectSingleCoin,
} from "../Redux/Slices/SingleCoinDetail";
import { useSelectCoinHistory, fetchData } from "../Redux/Slices/CoinHistory";

const CoinPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isError, SingleCoinData } = useSelector(useSelectSingleCoin);
  const { isLoading, HistoryData } = useSelector(useSelectCoinHistory);

  const [reloadCountdown, setReloadCountdown] = useState(null);

  useEffect(() => {
    dispatch(SingleFetchData(id));
    dispatch(fetchData(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (isError) {
      <div className="max-w-screen-xl mx-auto p-4 bg-red-200 text-red-800">
        <p>
          During the API call, an unexpected error occurred. Don't worry; the
          page will reload 🔄 automatically after 3 seconds.
        </p>
      </div>;
      const countdown = setTimeout(() => {
        window.location.reload();
      }, 3000);
      setReloadCountdown(countdown);
    }
    return () => {
      if (reloadCountdown) {
        clearTimeout(reloadCountdown);
      }
    };
  }, [isError, reloadCountdown]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section>
        {Object.keys(SingleCoinData).length > 0 && (
          <div className="max-w-screen-xl mx-auto p-4">
            <div>
              <HistoryChart sparklineData={SingleCoinData.sparkline} />
              <CoinDetail coinData={SingleCoinData} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
                <CoinPriceHistory
                  coinData={SingleCoinData}
                  HistoryData={HistoryData}
                />
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
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CoinPage;
