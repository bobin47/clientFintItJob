import { IUserAdmin } from "./../../../types/user/user.type";
import { createSlice } from "@reduxjs/toolkit";
import { getAllUserBuilder } from "./thunk/thunkUser";
import { createUserBuilder } from "./thunk/createThunkUser";

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
    createUserBuilder(builder);
  },
});

export default userSlice.reducer;
