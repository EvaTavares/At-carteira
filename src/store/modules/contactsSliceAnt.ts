import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ContactType from '../../types/ContactType';

interface ContactsState {
  items: ContactType[];
}

const initialState: ContactsState = {
  items: []
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactType>) => {
      const existContact = state.items.find(item => item.phone === action.payload.phone);
      if (existContact) {
        console.log('Contato já existe');
      } else {
        state.items.push(action.payload);
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    }
  }
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
