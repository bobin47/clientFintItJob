import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUser } from "../../../../api/user.api";
import { UserState } from "../userSlice";

export const editUser = createAsyncThunk(
  "user/editUser",
  async (data: any, thunk) => {
    const { id, body } = data;
    const response = await apiUser.editUser(id, body);
    return response.data;
  }
);

export const getAllUserBuilder = (
  builder: ActionReducerMapBuilder<UserState>
) => {
  builder.addCase(editUser.fulfilled, (state, action) => {
    console.log(action);
  });
  builder.addCase(editUser.pending, (state, action) => {});
  builder.addCase(editUser.rejected, (state, action) => {});
};
