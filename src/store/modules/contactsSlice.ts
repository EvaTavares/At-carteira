import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import ContactType from '../../types/ContactType';
import { RootState } from '../index';

const adapter = createEntityAdapter<ContactType>({
  selectId: item => item.phone
});

export const { selectAll, selectById, selectTotal } = adapter.getSelectors((state: RootState) => state.contacts);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: adapter.getInitialState(),
  reducers: {
    addContact: adapter.addOne,
    updateContact: adapter.updateOne,
    removeContact: adapter.removeOne
  }
});

export const { addContact, removeContact, updateContact } = contactsSlice.actions;
export default contactsSlice.reducer;
