import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelectCurrencySelect } from "./CurrencySelect";
import { useSelectTime } from "./TimeSelect";

export const fetchListCoinData = createAsyncThunk(
  "fetchListCoinData",
  async (_, { getState }) => {
    const selectedCurrency = useSelectCurrencySelect(
      getState()
    ).selectedCurrency;
    const selectedTime = useSelectTime(getState()).SelectedTime;
    const res = await fetch(
      `https://api.coinranking.com/v2/coins?limit=100&referenceCurrencyUuid=${selectedCurrency}&timePeriod=${selectedTime}`
    );
    const data = await res.json();
    return data;
  }
);

const ListCoin = createSlice({
  name: "ListCoin",
  initialState: {
    listCoinData: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListCoinData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchListCoinData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listCoinData = action.payload.data.coins;
    });
    builder.addCase(fetchListCoinData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error("Error During Api Call", action.error.message);
    });
  },
});

export const useSelectListCoin = (state) => state.ListCoin;
export default ListCoin.reducer;
