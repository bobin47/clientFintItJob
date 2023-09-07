import http from "../utils/http";

export const apiPost = {
  getAllPost: (params: {
    limit: number | 10;
    page: number | 1;
    search?: string;
  }) => {
    return http.get("post", { params });
  },
  getOnePost: () => {},
  createPost: (body: any) => {
    return http.post("post/create", body);
  },
  editPost: (id: number, body: any) => {
    return http.put(`post/${id}`, body);
  },
  deletePost: (id: number) => {
    return http.delete(`post/${id}`);
  },
  uploadAvatar: () => {},
};
