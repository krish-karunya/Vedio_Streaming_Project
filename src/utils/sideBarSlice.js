import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showSideBarView: true,
  },
  reducers: {
    toggleShowSideBarView: (state) => {
      state.showSideBarView = !state.showSideBarView;
    },
    closeMenu: (state) => {
      state.showSideBarView = false;
    },
  },
});

export const { toggleShowSideBarView, closeMenu } = sideBarSlice.actions;

export default sideBarSlice.reducer;
