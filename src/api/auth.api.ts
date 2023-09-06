import { LoginDto, RegisterDto } from "../types/dto/auth.dto";
import { ResponseSuccessAuth } from "../types/login/login.type";
import http from "../utils/http";

const authApi = {
  loginAccount: (body: LoginDto) =>
    http.post<ResponseSuccessAuth>("auth/login", body),
  registerAccount: (body: RegisterDto) => http.post("auth/register", body),
  refresherToken: (refresh_token: string) =>
    http.post("auth/refresh_token", refresh_token),
};

export default authApi;
