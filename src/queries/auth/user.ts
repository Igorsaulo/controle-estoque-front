import { useMutation } from 'react-query';
import { login } from "../../libs/api/user/login";
import { useAuth } from '../../libs/zustand/useAuth';
import {Acess_token} from '../../libs/zustand/useAuth';

export const useLogin = () => {
  const { isLoading, isError, isSuccess, mutate, data } = useMutation(
    'login',
    login,
    {
      onSuccess: (data) => {
        const access_token: Acess_token = data.data;
        useAuth.getState().login(access_token.access, access_token.refresh);
      
      },
    }
  );

  return {
    isLoading,
    isError,
    isSuccess,
    mutate,
    data,
  };
}
