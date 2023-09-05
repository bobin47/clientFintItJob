import { LoginDto, RegisterDto } from "../types/dto/auth.dto";
import http from "../utils/http";

const authApi = {
  loginAccount: (body: LoginDto) => http.post("auth/register", body),
  registerAccount: (body: RegisterDto) => http.post("auth/login", body),
  refresherToken: (refresh_token: string) =>
    http.post("auth/refresh_token", refresh_token),
};

export default authApi;
