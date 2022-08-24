import { createSlice } from '@reduxjs/toolkit';
import { sales } from './saleData';

const initialState = {
 sales,
 filterSales: sales,
 searchVisible: false,
};

export const salesSlice = createSlice({
 name: 'sales',
 initialState,
 reducers: {
  addSale: (state, action) => {
   state.push(action.payload);
   console.log(state, 'reducerLog');
  },
  searchSale: (state, action) => {
   const keyword = action.payload;

   if (keyword !== '') {
    const results = sales.filter((sale) => {
     return (
      sale.clientName.toLowerCase().includes(keyword) ||
      sale.address.toLowerCase().includes(keyword)
     );
    });

    state.filterSales = results;
   } else {
    state.filterSales = sales;
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

export const { addSale, searchSale, toggleSearch, turnOffSearch } =
 salesSlice.actions;

export default salesSlice.reducer;
