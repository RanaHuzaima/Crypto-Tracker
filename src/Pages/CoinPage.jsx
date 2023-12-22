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
      {/* <div>Hello</div> */}
      <section>
        {SingleCoinData && (
          <div className="max-w-screen-xl mx-auto p-4">
            <div>
              {/* <HistoryChart sparklineData={SingleCoinData.sparkline} /> */}
              <CoinDetail coinData={SingleCoinData} />
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
                <CoinPriceHistory coinData={SingleCoinData} />
                <CoinCalculator coinData={SingleCoinData} />
                <CoinStatistics
                  coinData={SingleCoinData}
                  name="Value Statistics"
                  desp="An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume."
                />
                <CoinSupply
                  coinData={SingleCoinData}
                  name="Supply information"
                  desp="View the total and circulating supply of Bitcoin, including details on how the supplies are calculated. "
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
