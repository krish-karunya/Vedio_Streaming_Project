import { createSlice } from "@reduxjs/toolkit";

const vedioSlice = createSlice({
  name: "vedio",
  initialState: null,
  reducers: {
    addVedioList: (state, action) => {
      return action.payload;
    },
  },
});

export const { addVedioList } = vedioSlice.actions;
export default vedioSlice.reducer;
