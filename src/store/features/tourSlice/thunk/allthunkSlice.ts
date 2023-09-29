import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiPost } from "../../../../api/post.api";
import { apiCategory } from "../../../../api/tour.api";
import { TourState } from "../tourSlice";

export const getAllTour = createAsyncThunk(
  "Post/getAll",
  async (data: any, thunk) => {
    console.log(data);
    const response = await apiCategory.getAllTour(data);
    return response.data;
  }
);

export const getAllTourBuilder = (
  builder: ActionReducerMapBuilder<TourState>
) => {
  builder.addCase(getAllTour.fulfilled, (state, action) => {
    console.log(action.payload);
       const { tours, totalTours } = action.payload;

    state.total = totalTours;
    state.tours = tours;
   
  });
  builder.addCase(getAllTour.pending, (state, action) => {});
  builder.addCase(getAllTour.rejected, (state, action) => {});
};
