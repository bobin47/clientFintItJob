import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiPost } from "../../../../api/post.api";
import { PostState } from "../postSlice";

export const getAllPost = createAsyncThunk(
  "Post/getAll",
  async (data: any, thunk) => {
    const response = await apiPost.getAllPost(data);
    return response.data;
  }
);

export const getAllPostBuilder = (
  builder: ActionReducerMapBuilder<PostState>
) => {
  builder.addCase(getAllPost.fulfilled, (state, action) => {});
  builder.addCase(getAllPost.pending, (state, action) => {});
  builder.addCase(getAllPost.rejected, (state, action) => {});
};
