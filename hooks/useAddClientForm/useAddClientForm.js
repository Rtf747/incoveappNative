import { useState } from 'react';
import fieldValidation from './fieldValidation';
import initialState from './initialState';
import validForm from './validForm';
import fieldIsNotEmpty from './fieldIsNotEmpty';
import {
 fieldChange,
 fieldIsValid,
 fieldIsNotValid,
 fieldIsEmpty,
} from './fieldChanges';
import { useDispatch } from 'react-redux';
import { selectClient } from '../../features/clientData/clientSlice';

export default function useAddClientForm(navigation, setVisible) {
 const [form, setForm] = useState(initialState);

 const dispatch = useDispatch();

 const onToggleSnackBar = () => setVisible(!visible);
 const onDismissSnackBar = () => setVisible(false);

 const handleChange = (name, value) => {
  validForm(form);
  if (fieldIsNotEmpty(value)) {
   fieldChange(name, value, true, form, setForm);
   if (!fieldValidation(name, value)) {
    fieldIsNotValid(name, value, false, true, form, setForm);
   } else {
    fieldIsValid(name, value, true, true, form, setForm);
   }
  } else {
   fieldIsEmpty(name, value, null, false, form, setForm);
  }
 };

 const onSubmit = () => {
  handleSubmit();
  navigation.navigate('payMethod');
  dispatch(selectClient(form));
 };

 const handleSubmit = () => {
  if (validForm(form)) {
   console.log('formulario enviado');
  } else {
   console.log('formulario invalido');
  }

  /*   const extraData = {
   id: 2004689420,
   date: '2022-03-05',
   time: '03:10 PM',
   amount: 7500,
   image: require('../../assets/images/aspiradora.png'),
  };
  //add extraData to values
  values = { ...values, ...extraData };
  console.log(values, 'addClientLog');
  dispatch(addSale(values));
  navigation.navigate('payMethod'); */
 };

 return {
  form,
  validForm,
  handleChange,
  handleSubmit,
  onSubmit,
  onToggleSnackBar,
  onDismissSnackBar,
 };
}
