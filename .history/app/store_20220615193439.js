import { configureStore } from '@reduxjs/toolkit';

import salesReducer from '../features/sales/salesSlice';
import inventoryReducer from '../features/inventory/inventorySlice';

export const store = configureStore({
 reducer: {
  sales: salesReducer,
  inventory: inventoryReducer,
 },
});
