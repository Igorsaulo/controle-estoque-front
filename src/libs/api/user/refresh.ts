import { api } from '..';

export const refresh = async (data) => {
  return await api.post('/users/refresh/', data);
};