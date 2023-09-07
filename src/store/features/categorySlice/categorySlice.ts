import { createSlice } from "@reduxjs/toolkit";

export interface CategoryState {
  category: any;
  total: number;
}

const initialState: CategoryState = {
  category: [],
  total: 0,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default categorySlice.reducer;
