import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCategory } from "../../../../api/category.api";
import { CategoryState } from "../categorySlice";

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (data: any, thunk) => {
    console.log(data);
    const response = await apiCategory.deleteCategory(data);
    return response.data;
  }
);

export const deleteCategoryBuilder = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  builder.addCase(deleteCategory.fulfilled, (state, action) => {});
  builder.addCase(deleteCategory.pending, (state, action) => {});
  builder.addCase(deleteCategory.rejected, (state, action) => {});
};
