import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../config/layout/DefaultLayout';
import WelcomeLayout from '../config/layout/WelcomeLayout';
import AddContact from '../pages/AddContact';
import Counter from '../pages/Counter';

import Home from '../pages/Home';
import Welcome from '../pages/Welcome';
import EditContact from '../pages/EditContact';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeLayout component={Welcome} />} />
        <Route path="/home" element={<DefaultLayout component={Home} />} />
        <Route path="/add-contact" element={<DefaultLayout component={AddContact} />} />
        <Route path="/edit-contact/:id" element={<DefaultLayout component={EditContact} />} />
        <Route path="/counter" element={<DefaultLayout component={Counter} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
