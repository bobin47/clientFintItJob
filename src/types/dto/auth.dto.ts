export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  status: number;
}
