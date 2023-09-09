import http from "../utils/http";

export const apiPost = {
  getAllPost: (params: {
    limit: number | 10;
    page: number | 1;
    search?: string;
  }) => {
    return http.get("posts", { params });
  },
  getOnePost: () => {},
  createPost: (body: any) => {
    return http.post("posts/create", body);
  },
  editPost: (id: number, body: any) => {
    return http.put(`posts/${id}`, body);
  },
  deletePost: (id: number) => {
    return http.delete(`posts/${id}`);
  },
  uploadAvatar: () => {},
};
