import { Grid } from '@mui/material';
import React from 'react';
import ListContacts from '../components/ListContacts';
import TitlePage from '../components/TitlePage';
import { useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/contactsSlice';

const Home: React.FC = () => {
  const contactsRedux = useAppSelector(selectAll);

  return (
    <Grid container>
      <TitlePage title="Extrato" />

      <Grid item xs={12}>
        <ListContacts data={contactsRedux} />
      </Grid>
    </Grid>
  );
};

export default Home;
