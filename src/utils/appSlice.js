import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    Dark: false,
    Lang: true,
  },
  reducers: {
    toggleDark: (state) => {
      state.Dark = !state.Dark;
    },
    toggleLang: (state, action) => {
      if (action.payload === "Hindi") state.Lang = false;
      else state.Lang = true;
    },
  },
});

export const { toggleDark, toggleLang } = appSlice.actions;
export default appSlice.reducer;
