import { createSlice } from "@reduxjs/toolkit";
import { getAllCompanyBuilder } from "./thunk/allthunkCompany";

export interface CompanyState {
  company: any;
  total: number;
}

const initialState: CompanyState = {
  company: [],
  total: 0,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getAllCompanyBuilder(builder);
  },
});

export default companySlice.reducer;
