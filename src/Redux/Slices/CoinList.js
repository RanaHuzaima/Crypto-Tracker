import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useSelectCurrencySelect } from "./CurrencySelect";
import { useSelectTime } from "./TimeSelect";

export const fetchData = createAsyncThunk(
  "fetchData",
  async (_, { getState }) => {
    const selectedCurrency = useSelectCurrencySelect(
      getState()
    ).selectedCurrency;
    const selectedTime = useSelectTime(getState()).SelectedTime;
    const options = {
      headers: {
        "x-access-token": "",
      },
    };
    const res = await fetch(
      `https://api.coinranking.com/v2/coins?limit=100&referenceCurrencyUuid=${selectedCurrency}&timePeriod=${selectedTime}`,
      options
    );
    const data = await res.json();
    return data;
  }
);

const CoinList = createSlice({
  name: "CoinList",
  initialState: {
    isLoading: false,
    data: [],
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
      state.data = action.payload.data.coins;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error("Error fetching data:", action.error.message);
    });
  },
});
export const useSelect = (state) => state.CoinList;

export default CoinList.reducer;
