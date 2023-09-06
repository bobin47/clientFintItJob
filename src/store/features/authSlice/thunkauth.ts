import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../../api/auth.api";
import { LoginDto } from "../../../types/dto/auth.dto";
import { AuthState } from "./authSlice";
import { getUserFormLC } from "../../../utils/auth.utils";

export const LoginAccount = createAsyncThunk(
  "auth/login",
  async (data: LoginDto, thunk) => {
    const response = await authApi.loginAccount(data);
    return response.data;
  }
);

export const LoginBuilder = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder.addCase(LoginAccount.fulfilled, (state, action) => {
    const { user } = action.payload.res.data;
    state.isAuthenticated = true;
    console.log(user);
    state.user = user;
    state.user = getUserFormLC();
  });
  builder.addCase(LoginAccount.pending, (state, action) => {});
  builder.addCase(LoginAccount.rejected, (state, action) => {
    state.isAuthenticated = false;
  });
};
