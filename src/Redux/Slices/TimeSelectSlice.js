import { createSlice } from "@reduxjs/toolkit";

const TimeSelect = createSlice({
  name: "TimeSelect",
  initialState: {
    selectedTime: "24h",
  },
  reducers: {
    updateSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    },
  },
});

export const { updateSelectedTime } = TimeSelect.actions;

export const useSelectTime = (state) => state.TimeSelect;

export default TimeSelect.reducer;
