import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiPost } from "../../../../api/post.api";
import { PostState } from "../postSlice";

export const deletePost = createAsyncThunk(
  "Post/deletePost",
  async (data: any, thunk) => {
    console.log(data);
    const response = await apiPost.deletePost(data);
    return response.data;
  }
);

export const deletePostBuilder = (
  builder: ActionReducerMapBuilder<PostState>
) => {
  builder.addCase(deletePost.fulfilled, (state, action) => {});
  builder.addCase(deletePost.pending, (state, action) => {});
  builder.addCase(deletePost.rejected, (state, action) => {});
};
