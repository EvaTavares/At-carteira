import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

interface TitlePageProps {
  title: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ title }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h5">{title}</Typography>
      <Divider />
    </Grid>
  );
};

export default TitlePage;
