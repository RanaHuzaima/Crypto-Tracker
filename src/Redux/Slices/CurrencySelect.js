import { createSlice } from "@reduxjs/toolkit";

const CurrencySelect = createSlice({
  name: "CurrencySelect",
  initialState: {
    selectedCurrency: "yhjMzLPhuIDl",
  },
  reducers: {
    updateItem: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { updateItem } = CurrencySelect.actions;

export const useSelectCurrencySelect = (state) => state.CurrencySelect;

export default CurrencySelect.reducer;
