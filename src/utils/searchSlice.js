import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSlice: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSlice } = searchslice.actions;
export default searchslice.reducer;
