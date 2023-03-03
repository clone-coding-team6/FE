import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../modules/PostSlice";

// TO-BE
export const store = configureStore({
  reducer: {
    newpost : postSlice,
  },
});

