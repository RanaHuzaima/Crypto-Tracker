import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useSelectCurrencySelect } from "./CurrencySelect";
import { useSelectTime } from "./TimeSelect";

export const fetchData = createAsyncThunk(
  "fetchData",
  async (id, { getState }) => {
    const selectedCurrency = useSelectCurrencySelect(
      getState()
    ).selectedCurrency;
    const selectedTime = useSelectTime(getState()).SelectedTime;
    const options = {
      headers: {
        "x-access-token": import.meta.env.VITE_API_KEY,
      },
    };
    const res = await fetch(
      `https://api.coinranking.com/v2/coin/${id}/history?referenceCurrencyUuid=${selectedCurrency}&timePeriod=${selectedTime}`,
      options
    );
    const data = await res.json();
    return data;
  }
);

const CoinHistory = createSlice({
  name: "CoinHistory",
  initialState: {
    isLoading: false,
    HistoryData: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.HistoryData = action.payload.data.history;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error("Error fetching data:", action.error.message);
    });
  },
});
export const useSelectCoinHistory = (state) => state.CoinHistory;

export default CoinHistory.reducer;
