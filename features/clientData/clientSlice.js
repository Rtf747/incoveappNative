import { createSlice } from '@reduxjs/toolkit';
import { clientData } from './clientData';
import { clientList } from './clientList';

const initialState = {
 clientData: clientData,
 clientList,
 selectedClient: [],
};

export const clientSlice = createSlice({
 name: 'client',
 initialState,
 reducers: {
  selectClient: (state, action) => {
   {
    state.selectedClient = action.payload;
   }
  },
 },
});

export const { selectClient } = clientSlice.actions;

export default clientSlice.reducer;
