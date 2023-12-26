import { configureStore } from "@reduxjs/toolkit";
import CurrencySelectReducer from "./Slices/CurrencySelectSlice";
import CurrencySignReducer from "./Slices/CurrencySignSlice";
import TimeSelectReducer from "./Slices/TimeSelectSlice";

const store = configureStore({
  reducer: {
    CurrencySelect: CurrencySelectReducer,
    CurrencySign: CurrencySignReducer,
    TimeSelect: TimeSelectReducer,
  },
});

export default store;
