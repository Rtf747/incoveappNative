import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import salesReducer from '../features/sales/salesSlice';
import inventoryReducer from '../features/inventory/inventorySlice';
import cartReducer from '../features/cart/cartSlice';

//debugg
const middlewares = getDefaultMiddleware({
 // https://github.com/reduxjs/redux-toolkit/issues/415
 immutableCheck: false,
});

if (__DEV__) {
 const createDebugger = require('redux-flipper').default;
 middlewares.push(createDebugger());
}
//debugg

export const store = configureStore({
 reducer: {
  sales: salesReducer,
  inventory: inventoryReducer,
 },
 /* debug */
 middleware: middlewares,
 /* debug */
});

export default store;

// Agregue esto para hacer el debug de redux en flipper:

/* 
import {  getDefaultMiddleware } from '@reduxjs/toolkit'

const middlewares = getDefaultMiddleware({
  // https://github.com/reduxjs/redux-toolkit/issues/415
  immutableCheck: false,
});

if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: RootReducer,
  middleware: middlewares,
})

export default store; */
//-------------------------------------------------------//
