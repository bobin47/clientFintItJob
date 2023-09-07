import { PostState } from "../postSlice";
import { apiPost } from "../../../../api/post.api";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk(
  "Post/createPost",
  async (data: any, thunk) => {
    const response = await apiPost.createPost(data);
    return response.data;
  }
);

export const createPostBuilder = (
  builder: ActionReducerMapBuilder<PostState>
) => {
  builder.addCase(createPost.fulfilled, (state, action) => {});

  builder.addCase(createPost.rejected, (state, action) => {});

  builder.addCase(createPost.pending, (state, action) => {});
};
