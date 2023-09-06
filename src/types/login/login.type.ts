import { IUser } from "../user/user.type";

interface Data {
  access_token: string;
  refresh_token: string;
  user: IUser;
}

export interface ResponseSuccessAuth {
  res: { data: Data; message: string; status: number };
}
