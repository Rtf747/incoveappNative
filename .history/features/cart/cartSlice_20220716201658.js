import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 products: [],
 cart: [],
};

export const salesSlice = createSlice({
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

export const { getAllData } = salesSlice.actions;

export default salesSlice.reducer;
