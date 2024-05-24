import { api } from '..';

type LoginData = {
  email: string;
  password: string;
};

export const login = async (data : LoginData) => {
  return await api.post('/users/login/', data);
};