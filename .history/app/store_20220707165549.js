import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import salesReducer from '../features/sales/salesSlice';
import inventoryReducer from '../features/inventory/inventorySlice';

//debugg---//
//---------//

//debugg
const middlewares = getDefaultMiddleware({
 // https://github.com/reduxjs/redux-toolkit/issues/415
 immutableCheck: false,
});

if (__DEV__) {
 const createDebugger = require('redux-flipper').default;
 middlewares.push(createDebugger());
}

//-------------//

export const store = configureStore({
 reducer: {
  middleware: middlewares,
  sales: salesReducer,
  inventory: inventoryReducer,
 },
});

export default store;

// Agregue esto para hacer el debug de redux en flipper:

/* 
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { RootReducer } from '../reducers';

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
