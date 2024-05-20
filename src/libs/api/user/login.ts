import { api } from '..';

export const login = async (data) => {
  return await api.post('/users/login/', data);
};