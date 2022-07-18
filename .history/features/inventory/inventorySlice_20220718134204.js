import { createSlice } from '@reduxjs/toolkit';
import { products } from './inventoryData';

const initialState = {
 products: products,
 categorizedProducts: [],
};

export const inventorySlice = createSlice({
 name: 'inventory',
 initialState,
 reducers: {
  addProduct: (state, action) => {
   state.push(action.payload);
  },
  filterProducts: (state, action) => {},
 },
});

export const { addProduct, filterProducts } = inventorySlice.actions;

export default inventorySlice.reducer;
