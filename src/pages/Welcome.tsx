import { CircularProgress, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  }, []);

  return (
    <Grid container justifyContent={'center'}>
      <Grid item sm={6} xs={12} sx={{ textAlign: 'center', color: { xs: '#333', sm: '#fff' } }}>
        <Typography variant="h3">Bem vindo!</Typography>
        <Typography variant="h6">Esta é sua aplicaçnao para cadastrar suas transações bancárias.</Typography>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Welcome;
