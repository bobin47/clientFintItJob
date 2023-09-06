import { App } from "antd";
import { UserState } from "../userSlice";
import { apiUser } from "./../../../../api/user.api";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (data: any, thunk) => {
    const response = await apiUser.createUser(data);
    return response.data;
  }
);

export const createUserBuilder = (
  builder: ActionReducerMapBuilder<UserState>
) => {
  builder.addCase(createUser.fulfilled, (state, action) => {});

  builder.addCase(createUser.rejected, (state, action) => {});

  builder.addCase(createUser.pending, (state, action) => {});
};
