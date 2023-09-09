import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCompanyBuilder,
  getAllCompanyNoPaginationBuilder,
} from "./thunk/allthunkCompany";
import { editCompanyBuilder } from "./thunk/editThunkCompany";
import { createCompany } from "./thunk/createThunkCompany";

export interface CompanyState {
  company: any;
  total: number;
  allCompany: any;
}

const initialState: CompanyState = {
  allCompany: [],
  company: [],
  total: 0,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getAllCompanyBuilder(builder);
    createCompany(builder);
    editCompanyBuilder(builder);
    getAllCompanyNoPaginationBuilder(builder);
  },
});

export default companySlice.reducer;
