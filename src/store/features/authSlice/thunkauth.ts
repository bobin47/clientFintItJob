import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../../api/auth.api";
import { AuthState } from "./authSlice";
import { getUserFormLC } from "../../../utils/auth.utils";

export const RegisterAccount = createAsyncThunk(
  "auth/register",
  async (data, thunk) => {
    const response = await authApi.registerAccount(data);
    return response.data;
  }
);

export const RegisterBuilder = (
  builder: ActionReducerMapBuilder<AuthState>
) => {
  builder.addCase(RegisterAccount.fulfilled, (state, action) => {
    console.log(action)
  });
  builder.addCase(RegisterAccount.pending, (state, action) => {});
  builder.addCase(RegisterAccount.rejected, (state, action) => {});
};

export const LoginAccount = createAsyncThunk(
  "auth/login",
  async (data, thunk) => {
    console.log(data);
    const response = await authApi.loginAccount(data);
    return response.data;
  }
);

export const LoginBuilder = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder.addCase(LoginAccount.fulfilled, (state, action) => {
    console.log(action.payload)
    const { user } = action.payload;
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
