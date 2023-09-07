import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCompany } from "../../../../api/company.api";
import { CompanyState } from "../companySlice";

export const deleteCompany = createAsyncThunk(
  "company/deleteCompany",
  async (data: any, thunk) => {
    console.log(data);
    const response = await apiCompany.deleteCompany(data);
    return response.data;
  }
);

export const deleteCompanyBuilder = (
  builder: ActionReducerMapBuilder<CompanyState>
) => {
  builder.addCase(deleteCompany.fulfilled, (state, action) => {
    console.log(action);
  });
  builder.addCase(deleteCompany.pending, (state, action) => {});
  builder.addCase(deleteCompany.rejected, (state, action) => {});
};
