import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStatsData = createAsyncThunk("fetchStatsData", async () => {
  const options = {
    headers: {
      "x-access-token": "",
    },
  };
  const res = await fetch("https://api.coinranking.com/v2/stats", options);
  const data = await res.json();
  return data;
});

const CoinStats = createSlice({
  name: "CoinStats",
  initialState: {
    isLoading: false,
    CoinStatsdata: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatsData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchStatsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.CoinStatsdata = action.payload.data; // Corrected line
    });
    builder.addCase(fetchStatsData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error("Fetch Api Error", action.error.message);
    });
  },
});

export const useSelectCoinStats = (state) => state.CoinStats;

export default CoinStats.reducer;
