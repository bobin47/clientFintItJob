import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUser } from "../../../../api/user.api";
import { UserState } from "../userSlice";
import { IFilter } from "../../../../types/user/user.type";

export const getAllUser = createAsyncThunk(
  "user/getAll",
  async (data: IFilter, thunk) => {
    const response = await apiUser.getAllUser(data);
    return response.data;
  }
);

export const getAllUserBuilder = (
  builder: ActionReducerMapBuilder<UserState>
) => {
  builder.addCase(getAllUser.fulfilled, (state, action) => {
    console.log(action.payload);
    const { data: UserList, total } = action.payload;
    console.log(UserList);
    state.user = UserList;
    state.total = total;
  });
  builder.addCase(getAllUser.pending, (state, action) => {});
  builder.addCase(getAllUser.rejected, (state, action) => {});
};
