import { CategoryState } from "../categorySlice";
import { apiCategory } from "../../../../api/category.api";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";

export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (data: any, thunk) => {
    const response = await apiCategory.createCategory(data);
    return response.data;
  }
);

export const createCategoryBuilder = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  builder.addCase(createCategory.fulfilled, (state, action) => {});

  builder.addCase(createCategory.rejected, (state, action) => {});

  builder.addCase(createCategory.pending, (state, action) => {});
};
