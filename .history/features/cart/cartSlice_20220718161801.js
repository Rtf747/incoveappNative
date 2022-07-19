import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 products: [],
 cart: [],
};

export const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
  getAllData: (state, action) => {
   console.log(action.payload, 'here');
  },
 },
});

export const { getAllData } = cartSlice.actions;

export default cartSlice.reducer;
