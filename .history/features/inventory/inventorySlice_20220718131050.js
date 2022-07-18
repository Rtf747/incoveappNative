import { createSlice } from '@reduxjs/toolkit';
import { products } from './inventoryData';

const initialState = products;

export const inventorySlice = createSlice({
 name: 'inventory',
 initialState,
 reducers: {
  addProduct: (state, action) => {
   state.push(action.payload);
  },
  filterProducts: (state, action) => {
   console.log(
    state.map((product) => product.productCategory === action.payload)
   );
  },
 },
});

export const { addProduct, filterProducts } = inventorySlice.actions;

export default inventorySlice.reducer;
