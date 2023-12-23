import { configureStore } from "@reduxjs/toolkit";
import CoinListReducer from "./Slices/CoinList";
import CoinStatsReducer from "./Slices/CoinStats";
import SingleCoinDetailReducer from "./Slices/SingleCoinDetail";
import CurrencySelectReducer from "./Slices/CurrencySelect";
import CurrencySignReducer from "./Slices/CurrencySign";
import TimeSelectReducer from "./Slices/TimeSelect";

const store = configureStore({
  reducer: {
    CoinList: CoinListReducer,
    CoinStats: CoinStatsReducer,
    SingleCoinDetail: SingleCoinDetailReducer,
    CurrencySelect: CurrencySelectReducer,
    CurrencySign: CurrencySignReducer,
    TimeSelect: TimeSelectReducer,
  },
});

export default store;
