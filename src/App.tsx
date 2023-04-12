import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material';
import GlobalStyles from './config/GlobalStyles';
import defaultTheme from './config/theme/defaultTheme';
import AppRoutes from './routes/AppRoutes';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
