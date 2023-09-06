import { ResponseSuccessUser } from "../types/user/user.type";
import http from "../utils/http";

export const apiUser = {
  getAllUser: (params?: { limit: number | 10; page: number | 1 }) => {
    return http.get<ResponseSuccessUser>("users", { params });
  },
  getOneUser: () => {},
  createUser: () => {},
  editUser: () => {},
  deleteUser: () => {},
  uploadAvatar: () => {},
};
