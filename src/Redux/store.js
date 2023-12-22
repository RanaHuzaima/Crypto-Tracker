import { configureStore } from "@reduxjs/toolkit";
import CoinListReducer from "./Slices/CoinList";

const store = configureStore({
  reducer: {
    CoinList: CoinListReducer,
  },
});

export default store;
