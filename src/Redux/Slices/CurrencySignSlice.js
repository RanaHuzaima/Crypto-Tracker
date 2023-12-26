import { createSlice } from "@reduxjs/toolkit";

const CurrencySign = createSlice({
  name: "CurrencySign",
  initialState: {
    selectedSign: "$",
  },
  reducers: {
    updateSelectedSign: (state, action) => {
      state.selectedSign = action.payload;
    },
  },
});

export const { updateSelectedSign } = CurrencySign.actions;
export const useSelectCurrencySign = (state) => state.CurrencySign;

export default CurrencySign.reducer;
