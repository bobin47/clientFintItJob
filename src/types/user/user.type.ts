export interface IUser {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  roles: string;
}

export interface IUserAdmin extends IUser {
  created_at: string;
  updated_at: string;
  status: number;
}

export interface IFilter {
  limit: number;
  page: number;
  search?: string;
}

export interface ResponseSuccessUser {
  data: IUserAdmin[];
  lastPage: number | null;
  nextPage: number | null;
  prevPage: number | null;
  total: number;
}
