import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";
import vedioReducer from "./vedioSlice";
const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    search: searchReducer,
    chat: chatReducer,
    vedio: vedioReducer,
  },
});

export default store;
