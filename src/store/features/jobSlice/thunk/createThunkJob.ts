import { JobState } from "../jobSlice";
import { apiJob } from "../../../../api/job.api";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";

export const createJob = createAsyncThunk(
  "job/createJob",
  async (data: any, thunk) => {
    const response = await apiJob.createJob(data);
    return response.data;
  }
);

export const createJobBuilder = (
  builder: ActionReducerMapBuilder<JobState>
) => {
  builder.addCase(createJob.fulfilled, (state, action) => {
    console.log(action.payload);
  });

  builder.addCase(createJob.rejected, (state, action) => {});

  builder.addCase(createJob.pending, (state, action) => {});
};
