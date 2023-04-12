import { combineReducers } from '@reduxjs/toolkit';

import contacts from './contactsSlice';
import counter from './counterSlice';

export default combineReducers({
  contacts,
  counter
});
