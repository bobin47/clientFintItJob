import http from "../utils/http";

export const apiCompany = {
  getAllCompany: (params: {
    limit: number | 10;
    page: number | 1;
    search?: string;
  }) => {
    return http.get("company/all", { params });
  },
  getAllCompanyNoPagination: () => {
    return http.get("company/not-pagination");
  },
  createCompany: (body: any) => {
    return http.post("company", body);
  },

  editCompany: (id: number, body: FormData) => {
    return http.put(`company/${id}`, body);
  },

  deleteCompany: (id: number) => {
    return http.delete(`company/${id}`);
  },
};
