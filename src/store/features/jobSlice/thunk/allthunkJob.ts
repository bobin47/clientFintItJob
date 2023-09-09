import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiJob } from "../../../../api/job.api";
import { JobState } from "../jobSlice";

export const getAllJob = createAsyncThunk(
  "job/getAll",
  async (data: any, thunk) => {
    const response = await apiJob.getAllJob(data);
    return response.data;
  }
);

export const getAllJobBuilder = (
  builder: ActionReducerMapBuilder<JobState>
) => {
  builder.addCase(getAllJob.fulfilled, (state, action) => {
    console.log(action.payload);
    const { data, total } = action.payload;
    state.job = data;
    state.total = total;
  });
  builder.addCase(getAllJob.pending, (state, action) => {});
  builder.addCase(getAllJob.rejected, (state, action) => {});
};
