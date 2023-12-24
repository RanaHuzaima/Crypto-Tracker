import { createSlice } from "@reduxjs/toolkit";

const AlertSlice = createSlice({
  name: "AlertSlice",
  initialState: {
    isOpen: false,
    isClose: false,
    type: "",
    message: "",
  },
  reducers: {
    setValues: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.isClose = action.payload.isClose;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
  },
});

export const { setValues } = AlertSlice.actions;

export const useSelectAlert = (state) => state.AlertSlice;

export default AlertSlice.reducer;
