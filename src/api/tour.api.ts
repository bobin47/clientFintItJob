import http from "../utils/http";

export const apiCategory = {
  getAllTour: (params: { limit: number | 1; page: number | 1 }) => {
    return http.get("tour/getPaginationTour", { params });
  },
};
