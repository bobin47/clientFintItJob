import { createSlice } from "@reduxjs/toolkit";
import { getAllJobBuilder } from "./thunk/allthunkJob";
import { createJobBuilder } from "./thunk/createThunkJob";
import { editJobBuilder } from "./thunk/editThunkJob";
import { deleteJobBuilder } from "./thunk/deleteThunkJob";

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
  extraReducers: (builder) => {
    getAllJobBuilder(builder);
    createJobBuilder(builder);
    editJobBuilder(builder);
    deleteJobBuilder(builder);
  },
});

export default jobSlice.reducer;
