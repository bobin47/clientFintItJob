import { CompanyState } from "../companySlice";
import { apiCompany } from "../../../../api/company.api";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";

export const createCompany = createAsyncThunk(
  "company/createCompany",
  async (data: any, thunk) => {
    const response = await apiCompany.createCompany(data);
    return response.data;
  }
);

export const createCompanyBuilder = (
  builder: ActionReducerMapBuilder<CompanyState>
) => {
  builder.addCase(createCompany.fulfilled, (state, action) => {
    console.log(action.payload);
  });

  builder.addCase(createCompany.rejected, (state, action) => {});

  builder.addCase(createCompany.pending, (state, action) => {});
};
