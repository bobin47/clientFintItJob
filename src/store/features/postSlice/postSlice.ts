import { createSlice } from "@reduxjs/toolkit";

export interface PostState {
  post: any;
  total: number;
}

const initialState: PostState = {
  post: [],
  total: 0,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default postSlice.reducer;
