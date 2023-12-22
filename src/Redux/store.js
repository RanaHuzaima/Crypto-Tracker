import { configureStore } from "@reduxjs/toolkit";
import CoinListReducer from "./Slices/CoinList";
import CoinStatsReducer from "./Slices/CoinStats";
import SingleCoinDetailReducer from "./Slices/SingleCoinDetail";

const store = configureStore({
  reducer: {
    CoinList: CoinListReducer,
    CoinStats: CoinStatsReducer,
    SingleCoinDetail: SingleCoinDetailReducer,
  },
});

export default store;
