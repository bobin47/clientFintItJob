import http from "../utils/http";

const authApi = {
  loginAccount: (body: any) => http.post("user/login", body),
  registerAccount: (body: any) => http.post("user/register", body),
  refresherToken: (refresh_token: string) =>
    http.post("auth/refresh_token", refresh_token),
};

export default authApi;
