import { configureStore } from "@reduxjs/toolkit";
import CoinStatsReducer from "./Slices/CoinStats";
import ListCoinReducer from "./Slices/ListCoin";
import SingleCoinDetailReducer from "./Slices/SingleCoinDetail";
import CurrencySelectReducer from "./Slices/CurrencySelect";
import CurrencySignReducer from "./Slices/CurrencySign";
import TimeSelectReducer from "./Slices/TimeSelect";
import CoinHistoryReducer from "./Slices/CoinHistory";

const store = configureStore({
  reducer: {
    CoinStats: CoinStatsReducer,
    ListCoin: ListCoinReducer,
    SingleCoinDetail: SingleCoinDetailReducer,
    CurrencySelect: CurrencySelectReducer,
    CurrencySign: CurrencySignReducer,
    TimeSelect: TimeSelectReducer,
    CoinHistory: CoinHistoryReducer,
  },
});

export default store;
