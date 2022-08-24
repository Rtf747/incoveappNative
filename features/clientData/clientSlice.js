import { createSlice } from '@reduxjs/toolkit';
import { clientData } from './clientData';
import { clientList } from './clientList';

const initialState = {
 clientData: clientData,
 clientList,
 selectedClient: [],
 searchVisible: false,
 filterClient: clientList,
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
  searchClient: (state, action) => {
   const keyword = action.payload;

   if (keyword !== '') {
    const results = clientList.filter((client) => {
     return (
      client.name.toLowerCase().includes(keyword) ||
      client.lastName.toLowerCase().includes(keyword)
     );
    });
    state.filterClient = results;
   } else {
    state.filterClient = clientList;
   }
  },
  toggleSearch: (state) => {
   state.searchVisible = !state.searchVisible;
  },
  turnOffSearch: (state) => {
   state.searchVisible = false;
  },
 },
});

export const { selectClient, searchClient, toggleSearch, turnOffSearch } =
 clientSlice.actions;

export default clientSlice.reducer;
