import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCategory } from "../../../../api/category.api";
import { CategoryState } from "../categorySlice";

export const editCategory = createAsyncThunk(
  "Category/editCategory",
  async (data: any, thunk) => {
    const { id, body } = data;
    const response = await apiCategory.editCategory(id, body);
    return response.data;
  }
);

export const editCategoryBuilder = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  builder.addCase(editCategory.fulfilled, (state, action) => {
    console.log(action);
  });
  builder.addCase(editCategory.pending, (state, action) => {});
  builder.addCase(editCategory.rejected, (state, action) => {});
};
