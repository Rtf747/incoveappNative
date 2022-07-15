import { useState } from 'react';
import fieldValidation from './fieldValidation';
import initialState from './initialState';
import validForm from './validForm';
import fieldIsNotEmpty from './fieldIsNotEmpty';
import validation from './validation';
import {
 fieldChange,
 fieldIsValid,
 fieldIsNotValid,
 fieldIsEmpty,
} from './fieldChanges';

export default function useAddClientForm() {
 const [form, setForm] = useState(initialState);

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
 };
}
