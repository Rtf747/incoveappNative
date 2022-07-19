import { createSlice } from '@reduxjs/toolkit';
import { products } from './inventoryData';

const initialState = {
 products: products,
 categorizedProducts: [],
 cart: [],
};

export const inventorySlice = createSlice({
 name: 'inventory',
 initialState,
 reducers: {
  addToCart: (state, action) => {
   const newItem = state.products.find(
    (product) => product.id === action.payload
   );

   console.log(action.payload);
  },
  filterProducts: (state, action) => {
   if (action.payload === 'Ver todo') {
    console.log(state.categorizedProducts);
    state.categorizedProducts = state.products;
   } else {
    state.categorizedProducts = state.products.filter(
     (product) => product.productCategory === action.payload
    );
   }
  },
 },
});

export const { addToCart, filterProducts } = inventorySlice.actions;

export default inventorySlice.reducer;
