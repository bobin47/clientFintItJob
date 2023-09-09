import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiJob } from "../../../../api/job.api";
import { JobState } from "../jobSlice";

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (data: any, thunk) => {
    console.log(data);
    const response = await apiJob.deleteJob(data);
    return response.data;
  }
);

export const deleteJobBuilder = (
  builder: ActionReducerMapBuilder<JobState>
) => {
  builder.addCase(deleteJob.fulfilled, (state, action) => {
    console.log(action.payload);
  });
  builder.addCase(deleteJob.pending, (state, action) => {});
  builder.addCase(deleteJob.rejected, (state, action) => {});
};
