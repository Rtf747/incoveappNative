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
   return {
    ...state,
    products: action.payload,
   };
  },
 },
});

export const { getAllData } = cartSlice.actions;

export default cartSlice.reducer;
