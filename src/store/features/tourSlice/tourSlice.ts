import { createSlice } from "@reduxjs/toolkit";
import { getAllTourBuilder } from './thunk/allthunkSlice'

export interface TourState {
  tours:[];
  total: number;
}

const initialState: TourState = {
  tours: [],
  total: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   getAllTourBuilder(builder)
  },
});

export default userSlice.reducer;
