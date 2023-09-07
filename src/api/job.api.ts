import http from "../utils/http";

export const apiJob = {
  getAllJob: (params: {
    limit: number | 10;
    page: number | 1;
    search?: string;
  }) => {
    return http.get("job/all", { params });
  },
  getOneJob: () => {},
  createJob: (body: any) => {
    return http.post("job/create", body);
  },
  editJob: (id: number, body: any) => {
    return http.put(`job/${id}`, body);
  },
  deleteJob: (id: number) => {
    return http.delete(`job/${id}`);
  },
  uploadAvatar: () => {},
};
