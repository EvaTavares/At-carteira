import { Grid } from '@mui/material';
import React from 'react';
import GridContainerWelcome from './components/GridContainerWelcome';

interface WelcomeLayoutProps {
  component: React.FC;
}

const WelcomeLayout: React.FC<WelcomeLayoutProps> = ({ component: Component }) => {
  return (
    <GridContainerWelcome container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Component />
      </Grid>
    </GridContainerWelcome>
  );
};

export default WelcomeLayout;
