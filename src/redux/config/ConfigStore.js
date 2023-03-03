import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../modules/dateSlice";

// TO-BE
const store = configureStore({
  reducer: {
    postSlice,
  },
});

export default store;