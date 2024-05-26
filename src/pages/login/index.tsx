import { Grid, Box } from "@mui/material";
import { useAuth } from "../../libs/zustand/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LoginForm } from "../../components/molecule/forms/login/loginForm";
import { RegisterForm } from "../../components/molecule/forms/login/registerForm";

export function Login() {
  const { access_token } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    console.log(access_token);
    if (access_token && access_token.access !== '') {
      navigate('/');
      window.location.reload();
    }
  }, [access_token]);

  const [isRegister, setIsRegister] = useState(false);

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
          <Grid item xs={6} style={{ padding: '20px' }}>
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
            {isRegister ? <RegisterForm setIsRegister={setIsRegister} /> : <LoginForm setIsRegister={setIsRegister} />}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}