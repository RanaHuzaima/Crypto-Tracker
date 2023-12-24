import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelectCurrencySelect } from "./CurrencySelect";
import { useSelectTime } from "./TimeSelect";

export const SingleFetchData = createAsyncThunk(
  "SingleFetchData",
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
      `https://api.coinranking.com/v2/coin/${id}?referenceCurrencyUuid=${selectedCurrency}&timePeriod=${selectedTime}`,
      options
    );
    const data = await res.json();
    return data;
  }
);

const SingleCoinDetail = createSlice({
  name: "SingleCoinDetails",
  initialState: {
    SingleCoinData: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SingleFetchData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(SingleFetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.SingleCoinData = action.payload.data.coin;
    });
    builder.addCase(SingleFetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error(
        "Error During Fetch Api For Single Coin Data",
        action.error.message
      );
    });
  },
});

export const useSelectSingleCoin = (state) => state.SingleCoinDetail;

export default SingleCoinDetail.reducer;
