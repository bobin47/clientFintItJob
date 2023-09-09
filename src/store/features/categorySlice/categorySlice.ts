import { createSlice } from "@reduxjs/toolkit";
import { getAllCategoryBuilder } from "./thunk/allthunkCategory";
import { editCategory } from "./thunk/editThunkCategory";
import { createCategoryBuilder } from "./thunk/createThunkCategory";
import { deleteCategory } from "./thunk/deleteThunkCategory";

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
  extraReducers: (builder) => {
    getAllCategoryBuilder(builder);
    createCategoryBuilder(builder);
    editCategory(builder);
    deleteCategory(builder);
  },
});

export default categorySlice.reducer;
