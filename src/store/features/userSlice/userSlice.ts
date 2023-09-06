import { IUserAdmin } from "./../../../types/user/user.type";
import { createSlice } from "@reduxjs/toolkit";
import { getAllUserBuilder } from "./thunkUser";

export interface UserState {
  user: IUserAdmin[];
  total: number;
}

const initialState: UserState = {
  user: [],
  total: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getAllUserBuilder(builder);
  },
});

export default userSlice.reducer;
