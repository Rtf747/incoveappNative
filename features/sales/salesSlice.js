import { createSlice } from '@reduxjs/toolkit';
import { sales } from './saleData';

const initialState = sales;

export const salesSlice = createSlice({
 name: 'sales',
 initialState,
 reducers: {
  addSale: (state, action) => {
   state.push(action.payload);
   console.log(state, 'reducerLog');
  },
 },
});

export const { addSale } = salesSlice.actions;

export default salesSlice.reducer;
