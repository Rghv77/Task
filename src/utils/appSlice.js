import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    Dark: false,
  },
  reducers: {
    toggleDark: (state) => {
      state.Dark = !state.Dark;
    },
  },
});

export const { toggleDark } = appSlice.actions;
export default appSlice.reducer;
