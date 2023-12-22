import React, { useEffect } from "react";
import HistoryChart from "../Components/HistoryChart";
import CoinDetail from "../Components/CoinDetail";
import { useParams } from "react-router-dom";
import CoinStatistics from "../Components/CoinStatistics";
import CoinSupply from "../Components/CoinSupply";
import CoinPriceHistory from "../Components/CoinPriceHistory";
import CoinCalculator from "../Components/CoinCalculator";
import { useDispatch, useSelector } from "react-redux";
import { SingleFetchData, useSelect } from "../Redux/Slices/SingleCoinDetail";

const CoinPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, SingleCoinData } = useSelector(useSelect);

  useEffect(() => {
    dispatch(SingleFetchData(id));
  }, [dispatch, id]);
  console.log(SingleCoinData);

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
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
                <CoinPriceHistory coinData={SingleCoinData} />
                <CoinCalculator coinData={SingleCoinData} />
                <CoinStatistics
                  coinData={SingleCoinData}
                  name="Value Statistics"
                />
                <CoinSupply
                  coinData={SingleCoinData}
                  name="Supply information"
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
