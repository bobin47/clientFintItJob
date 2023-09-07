import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiJob } from "../../../../api/job.api";
import { JobState } from "../jobSlice";

export const editJob = createAsyncThunk(
  "job/editJob",
  async (data: any, thunk) => {
    const { id, body } = data;
    const response = await apiJob.editJob(id, body);
    return response.data;
  }
);

export const editJobBuilder = (builder: ActionReducerMapBuilder<JobState>) => {
  builder.addCase(editJob.fulfilled, (state, action) => {
    console.log(action);
  });
  builder.addCase(editJob.pending, (state, action) => {});
  builder.addCase(editJob.rejected, (state, action) => {});
};
