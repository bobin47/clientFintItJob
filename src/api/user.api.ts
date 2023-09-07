import { ResponseSuccessUser } from "../types/user/user.type";
import http from "../utils/http";

export const apiUser = {
  getAllUser: (params: {
    limit: number | 10;
    page: number | 1;
    search?: string;
  }) => {
    return http.get<ResponseSuccessUser>("users", { params });
  },
  getOneUser: () => {},
  createUser: (body: any) => {
    return http.post("users/create", body);
  },
  editUser: (id: number, body: any) => {
    return http.put(`users/${id}`, body);
  },
  deleteUser: (id: number) => {
    return http.delete(`users/${id}`);
  },
  uploadAvatar: () => {},
};
