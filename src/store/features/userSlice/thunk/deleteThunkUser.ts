import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUser } from "../../../../api/user.api";
import { UserState } from "../userSlice";

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (data: any, thunk) => {
    console.log(data);
    const response = await apiUser.deleteUser(data);
    return response.data;
  }
);

export const getAllUserBuilder = (
  builder: ActionReducerMapBuilder<UserState>
) => {
  builder.addCase(deleteUser.fulfilled, (state, action) => {});
  builder.addCase(deleteUser.pending, (state, action) => {});
  builder.addCase(deleteUser.rejected, (state, action) => {});
};
