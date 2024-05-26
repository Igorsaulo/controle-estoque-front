import { api } from "..";

export type RegisterData = {
  email: string;
  password: string;
};

export const register = async (data: RegisterData) => {
  return await api.post("/users/register/", data);
};