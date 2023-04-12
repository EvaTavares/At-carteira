import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import TitlePage from '../components/TitlePage';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeName, decrement, increment } from '../store/modules/counterSlice';

const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const countRedux = useAppSelector(state => state.counter);

  const handleIncrement = () => {
    console.log('Aumentando...');
    dispatch(increment());
    dispatch(changeName('Aumentado.'));
  };

  const handleDecrement = () => {
    console.log('Diminuindo...');
    dispatch(decrement());
  };

  return (
    <Grid container spacing={2}>
      <TitlePage title="Contador" />

      <Grid item xs={12}>
        <Typography variant="h3">{countRedux.value}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleIncrement} fullWidth variant="contained">
          Aumentar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleDecrement} fullWidth variant="outlined">
          Diminuir
        </Button>
      </Grid>
    </Grid>
  );
};

export default Counter;
