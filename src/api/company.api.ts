import http from "../utils/http";

export const apiCompany = {
  getAllCompany: (params: {
    limit: number | 10;
    page: number | 1;
    search?: string;
  }) => {
    return http.get("company/all", { params });
  },
  getOneCompany: () => {},
  createCompany: (body: any) => {
    return http.post("company/create", body);
  },
  editCompany: (id: number, body: any) => {
    return http.put(`company/${id}`, body);
  },
  deleteCompany: (id: number) => {
    return http.delete(`company/${id}`);
  },
  uploadAvatar: () => {},
};
