import {
 configureStore,
 getDefaultMiddleware,
 combineReducers,
} from '@reduxjs/toolkit';
import salesReducer from '../features/sales/salesSlice';
import inventoryReducer from '../features/inventory/inventorySlice';
import clientDataReducer from '../features/clientData/clientSlice';
import payMethodReducer from '../features/payMethod/payMethodSlice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';

const rootReducer = combineReducers({
 sales: salesReducer,
 inventory: inventoryReducer,
 clientData: clientDataReducer,
 payMethod: payMethodReducer,
});

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

const persistConfig = {
 key: 'root',
 storage: ExpoFileSystemStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
 reducer: persistedReducer,
 //debug
 //middleware: middlewares,
 //redux-persist
 middleware: [thunk],
});

export const persistor = persistStore(store);

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
