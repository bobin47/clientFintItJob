import { createSlice } from "@reduxjs/toolkit";

export interface JobState {
  job: any;
  total: number;
}

const initialState: JobState = {
  job: [],
  total: 0,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default jobSlice.reducer;
