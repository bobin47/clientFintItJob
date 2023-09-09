import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCategory } from "../../../../api/category.api";
import { CategoryState } from "../categorySlice";

export const getAllCategory = createAsyncThunk(
  "category/getAll",
  async (data: any, thunk) => {
    const response = await apiCategory.getAllCategory(data);
    return response.data;
  }
);

export const getAllCategoryBuilder = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  builder.addCase(getAllCategory.fulfilled, (state, action) => {
    const { data } = action.payload;
    state.category = data;
  });
  builder.addCase(getAllCategory.pending, (state, action) => {});
  builder.addCase(getAllCategory.rejected, (state, action) => {});
};
