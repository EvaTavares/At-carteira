import { Button, FormControl, Grid, Input, InputAdornment, InputLabel, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TitlePage from '../components/TitlePage';
import { useAppDispatch } from '../store/hooks';
import { addContact } from '../store/modules/contactsSlice';
import ContactType from '../types/ContactType';

const AddContact: React.FC = () => {
  const dispatch = useAppDispatch();

  const [tipoTransaction, setTipoTransaction] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);

  const [valor, setValor] = useState<string>('');
  const [phoneError, setPhoneError] = useState<boolean>(false);

  useEffect(() => {
    if (tipoTransaction.length) {
      if (tipoTransaction.length < 3) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    } else {
      setNameError(false);
    }
  }, [tipoTransaction]);

  useEffect(() => {
    if (valor.length) {
      if (valor.length < 1) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    } else {
      setPhoneError(false);
    }
  }, [valor]);

  const handleClear = () => {
    setTipoTransaction('');
    setValor('');
  };

  const handleAdd = () => {
    const contact: ContactType = { name: tipoTransaction, phone: valor };

    dispatch(addContact(contact));

    handleClear();
  };

  const currencies = [
    {
      value: 'Entrada',
      label: 'Entrada'
    },
    {
      value: 'Saída',
      label: 'Saída'
    }
  ];

  return (
    <Grid container spacing={2}>
      <TitlePage title="Lançar transação" />
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="standard-select-currency"
          select
          value={tipoTransaction}
          label="Tipo de transação"
          defaultValue="Entrada"
          helperText="Por favor selecione Entrada ou Saída"
          variant="standard"
          onChange={event => setTipoTransaction(event.target.value)}
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Valor</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            onChange={event => setValor(event.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleClear} fullWidth variant="outlined">
          Limpar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleAdd} disabled={nameError || phoneError} fullWidth variant="contained">
          Cadastrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddContact;
