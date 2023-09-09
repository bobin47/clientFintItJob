import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCompany } from "../../../../api/company.api";
import { CompanyState } from "../companySlice";

export const editCompany = createAsyncThunk(
  "company/editCompany",
  async (data: any, thunk) => {
    const response = await apiCompany.editCompany(data.id, data.formData);
    return response.data;
  }
);

export const editCompanyBuilder = (
  builder: ActionReducerMapBuilder<CompanyState>
) => {
  builder.addCase(editCompany.fulfilled, (state, action) => {
    console.log(action);
  });
  builder.addCase(editCompany.pending, (state, action) => {});
  builder.addCase(editCompany.rejected, (state, action) => {});
};
