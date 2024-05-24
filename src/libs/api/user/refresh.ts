import { api } from '..';

export type RefreshData = {
  refresh: string;
};
export const refresh = async (data : RefreshData) => {
  return await api.post('/users/refresh/', data);
};