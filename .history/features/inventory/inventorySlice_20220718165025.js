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
    (product) => product.productId === action.payload
   );

   const itemInCart = state.cart.find(
    (product) => product.productId === newItem.productId
   );

   console.log(newItem);
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
