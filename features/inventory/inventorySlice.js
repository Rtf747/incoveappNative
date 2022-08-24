import { createSlice } from '@reduxjs/toolkit';
import { products } from './inventoryData';

const initialState = {
 products: products,
 categorizedProducts: [],
 cart: [],
 filterProducts: [],
 searchVisible: false,
 deleteModalVisible: false,
};

export const inventorySlice = createSlice({
 name: 'inventory',
 initialState,
 reducers: {
  toggleDeleteModal: (state) => {
   state.deleteModalVisible = !state.deleteModalVisible;
  },
  addToCart: (state, action) => {
   const newItem = state.products.find(
    (product) => product.productId === action.payload
   );

   const itemInCart = state.cart.find(
    (product) => product.productId === newItem.productId
   );

   return itemInCart
    ? {
       ...state,
       cart: state.cart.map((item) =>
        item.productId === newItem.productId
         ? { ...item, quantity: parseInt(item.quantity) + 1 }
         : item
       ),
      }
    : {
       ...state,
       cart: [...state.cart, { ...newItem, quantity: 1 }],
      };
  },
  filterProducts: (state, action) => {
   if (action.payload === 'Ver todo') {
    state.categorizedProducts = state.products;
   } else {
    state.categorizedProducts = state.products.filter(
     (product) => product.productSubCategory === action.payload
    );
   }
  },
  removeFromCart: (state, action) => {
   return {
    ...state,
    cart: state.cart.filter((product) => product.productId !== action.payload),
   };
  },
  clearCart: (state) => {
   return {
    ...state,
    cart: [],
   };
  },
  searchProduct: (state, action) => {
   const keyword = action.payload;

   if (keyword !== '') {
    const results = state.categorizedProducts.filter((product) => {
     return (
      product.productName.toLowerCase().includes(keyword) ||
      product.productDescription.toLowerCase().includes(keyword)
     );
    });

    state.filterProducts = results;
   } else {
    state.filterProducts = state.categorizedProducts;
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

export const {
 addToCart,
 filterProducts,
 removeFromCart,
 clearCart,
 toggleDeleteModal,
 searchProduct,
 toggleSearch,
 turnOffSearch,
} = inventorySlice.actions;

export default inventorySlice.reducer;
