import { useQuery } from 'react-query';
import { refresh } from '../../libs/api/user/refresh';
import { api } from '../../libs/api';

async function req() {
  const accessToken = window.sessionStorage.getItem('accessToken');
  if (accessToken) {
    return await api.get(`/users/me/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
}

export const useProfile = () => {
  const { isLoading, isError, isSuccess, data, refetch } = useQuery(
    'authProfile',
    req,
    {
      retry: false,
      onError: async (error) => {
        if (error.response?.status === 401) {
          await refreshReq();
          await refetch();
        }
      },
    }
  );

  return {
    isLoading,
    isError,
    isSuccess,
    refetch,
    data: data?.data,
  };
};

const refreshReq = async () => {
  const refreshToken = window.sessionStorage.getItem('refreshToken');
  if (refreshToken) {
    const response = await refresh({ refresh: refreshToken });
    const { access } = response.data;
    return window.sessionStorage.setItem('accessToken', access);
  }
 sessionStorage.clear();
 window.location.href = '/entrar';
}