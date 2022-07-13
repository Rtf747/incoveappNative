import { configureStore } from '@reduxjs/toolkit';
import salesReducer from '../features/sales/salesSlice';
import inventoryReducer from '../features/inventory/inventorySlice';

const middlewares = getDefaultMiddleware({
 // https://github.com/reduxjs/redux-toolkit/issues/415
 immutableCheck: false,
});

export const store = configureStore({
 reducer: {
  sales: salesReducer,
  inventory: inventoryReducer,
 },
});
