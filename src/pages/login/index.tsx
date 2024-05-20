import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import { useLogin } from "../../queries/auth/user";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useAuth } from "../../libs/zustand/useAuth";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export function Login() {
  const { mutate } = useLogin();
  const { access_token } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    if (data) {
      mutate(data);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    console.log(access_token);
    if (access_token && access_token.access !== '') {
      navigate('/');
      window.location.reload();
    }
  }, [access_token]);



  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Grid container spacing={2}>
        <Grid item container display={'flex'} justifyContent={'space-between'} xs={12}>
          <Grid item xs={6} style={{padding: '20px',}}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                backgroundColor: '#FBC02D',
                borderRadius: '16px',
              }}>
              <img src="/logo.png" alt="Logo" />
            </Box>
          </Grid>
          <Grid item xs={6}>
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
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
