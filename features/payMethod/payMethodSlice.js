import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 typeOfQuota: 'exactQuotas',
 //cantidad de cuotas a pagar
 numberOfPayments: '',
 //monto de las cuotas
 quotaAmount: '',
 //monto de la ultima cuota
 lastQuota: '',
 //valor del radio button seleccionado
 payInterval: '',
 //abono inicial
 initialPay: '',
 //valor restante a pagar
 totalCalculated: '',
};

export const payMethodSlice = createSlice({
 name: 'payMethod',
 initialState,
 reducers: {
  selectPayMethod: (state, action) => {
   const {
    typeOfQuota,
    numberOfPayments,
    quotaAmount,
    lastQuota,
    payInterval,
    initialPay,
    totalCalculated,
   } = action.payload;
   state.typeOfQuota = typeOfQuota;
   state.numberOfPayments = numberOfPayments;
   state.quotaAmount = quotaAmount;
   state.lastQuota = lastQuota;
   state.payInterval = payInterval;
   state.initialPay = initialPay;
   state.totalCalculated = totalCalculated;
  },
 },
});

export const { selectPayMethod } = payMethodSlice.actions;

export default payMethodSlice.reducer;
