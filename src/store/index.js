import { configureStore } from "@reduxjs/toolkit";
import covidStatisticReducer from "./covidStatisticSlice";

export default configureStore({
  reducer: {
    countries: covidStatisticReducer(),
  },
});
