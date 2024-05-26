import { Box, Button, TextField, Typography } from "@mui/material";
import { useLogin } from "../../../../queries/auth/user";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { useRegister } from "../../../../queries/user/register";

export function RegisterForm({ setIsRegister }: { setIsRegister: (value: boolean) => void }) {
    const { mutate, isSuccess } = useRegister();
    const { mutate: mutateLogin } = useLogin();
    const [data, setData] = useState({ email: '', password: '' } as { email: string; password: string });
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
      confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required(),
    });
  
    const { register, handleSubmit } = useForm({
      resolver: yupResolver(schema),
      mode: 'onBlur',
    });
  
    const onSubmit = async (data: { email: string; password: string }) => {
      if (data) {
        mutate(data);
        setData(data);
      }
    };
  
    useEffect(() => {
      if (isSuccess) {
        mutateLogin(data);
      }
    }, [isSuccess]);
  
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '60%',
          }}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
            }}>
            <Typography variant="h4">Crie sua conta</Typography>
            <Typography variant="body1">Faça seu cadastro para acessar o sistema</Typography>
          </Box>
          <TextField label="Email" variant="outlined" {...register('email')} />
          <TextField label="Senha" variant="outlined" type="password" {...register('password')} />
          <TextField label="Confirmar senha" variant="outlined" type="password" {...register('confirmPassword')} />
          <Button variant="contained" color="primary" type="submit">
            Cadastrar
          </Button>
          <Button variant="text" color="primary" onClick={() => setIsRegister(false)}>
            Já possui uma conta? Clique aqui
          </Button>
        </Box>
      </Box>
    );
  }
  