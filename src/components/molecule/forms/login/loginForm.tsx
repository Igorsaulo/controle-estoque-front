import {Box, Button, TextField, Typography } from "@mui/material";
import { useLogin } from "../../../../queries/auth/user";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';


export function LoginForm({ setIsRegister }: { setIsRegister: (value: boolean) => void }) {
    const { mutate } = useLogin();
  
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });
  
    const { register, handleSubmit } = useForm({
      resolver: yupResolver(schema),
      mode: 'onBlur',
    });
  
    const onSubmit = async (data: { email: string; password: string }) => {
      if (data) {
        mutate(data);
      }
    };
  
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
            <Typography variant="h4">Bem vindo</Typography>
            <Typography variant="body1">Faça login para acessar o sistema</Typography>
          </Box>
          <TextField label="Email" variant="outlined" {...register('email')} />
          <TextField label="Senha" variant="outlined" type="password" {...register('password')} />
          <Button variant="contained" color="primary" type="submit">
            Entrar
          </Button>
          <Button variant="text" color="primary" onClick={() => setIsRegister(true)}>
            Não possui uma conta? Clique aqui
          </Button>
        </Box>
      </Box>
    );
  }