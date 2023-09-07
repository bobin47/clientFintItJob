import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCompany } from "../../../../api/company.api";
import { CompanyState } from "../companySlice";

export const getAllCompany = createAsyncThunk(
  "company/getAll",
  async (data: any, thunk) => {
    const response = await apiCompany.getAllCompany(data);
    return response.data;
  }
);

export const getAllCompanyBuilder = (
  builder: ActionReducerMapBuilder<CompanyState>
) => {
  builder.addCase(getAllCompany.fulfilled, (state, action) => {
    console.log(action.payload.data);
    const { data, total } = action.payload;
    state.company = data;
    console.log(state.company);
    state.total = total;
  });
  builder.addCase(getAllCompany.pending, (state, action) => {});
  builder.addCase(getAllCompany.rejected, (state, action) => {});
};
