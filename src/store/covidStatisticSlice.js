import { createSlice } from "@reduxjs/toolkit";

const covidStatisticSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
  },
  reducers: {},
  extraReducers: {},
});

export default covidStatisticSlice.reducer;
