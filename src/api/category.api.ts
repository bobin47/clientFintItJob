import http from "../utils/http";

export const apiCategory = {
  getAllCategory: (params: { search?: string }) => {
    return http.get("category", { params });
  },
  getOneCategory: () => {},
  createCategory: (body: any) => {
    return http.post("category/create", body);
  },
  editCategory: (id: number, body: any) => {
    return http.put(`category/${id}`, body);
  },
  deleteCategory: (id: number) => {
    return http.delete(`category/${id}`);
  },
  uploadAvatar: () => {},
};
