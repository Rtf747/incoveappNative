import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 numberOfPayments: '',
};

export const payMethodSlice = createSlice({
 name: 'payMethod',
 initialState,
 reducers: {
  addSale: (state, action) => {
   state.push(action.payload);
   console.log(state, 'reducerLog');
  },
 },
});

export const { addSale } = payMethodSlice.actions;

export default payMethodSlice.reducer;
