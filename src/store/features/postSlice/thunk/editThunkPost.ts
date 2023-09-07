import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiPost } from "../../../../api/post.api";
import { PostState } from "../postSlice";

export const editPost = createAsyncThunk(
  "Post/editPost",
  async (data: any, thunk) => {
    const { id, body } = data;
    const response = await apiPost.editPost(id, body);
    return response.data;
  }
);

export const editPostBuilder = (
  builder: ActionReducerMapBuilder<PostState>
) => {
  builder.addCase(editPost.fulfilled, (state, action) => {
    console.log(action);
  });
  builder.addCase(editPost.pending, (state, action) => {});
  builder.addCase(editPost.rejected, (state, action) => {});
};
