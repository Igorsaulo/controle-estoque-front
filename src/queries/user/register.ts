import { register } from "../../libs/api/user/register";

import { useMutation } from 'react-query';

export const useRegister = () => {
  const { isLoading, isError, isSuccess, mutate, data } = useMutation(
    'register',
    register,
    {
      onSuccess: (data) => {
        console.log(data);
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