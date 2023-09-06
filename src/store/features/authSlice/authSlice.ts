import { createSlice } from "@reduxjs/toolkit";
import { LoginBuilder } from "./thunkauth";

export interface AuthState {
  user: any;
  isAuthenticated: boolean | null;
  messError: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: null,
  messError: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    LoginBuilder(builder);
  },
});

export default authSlice.reducer;
