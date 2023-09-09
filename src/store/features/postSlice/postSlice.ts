import { createSlice } from "@reduxjs/toolkit";
import { getAllPostBuilder } from "./thunk/allthunkPost";
import { createPostBuilder } from "./thunk/createThunkPost";
import { deletePostBuilder } from "./thunk/deleteThunkPost";
import { editPostBuilder } from "./thunk/editThunkPost";

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
  extraReducers: (builder) => {
    getAllPostBuilder(builder);
    createPostBuilder(builder);
    deletePostBuilder(builder);
    editPostBuilder(builder);
  },
});

export default postSlice.reducer;
