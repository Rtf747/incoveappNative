import { useState } from 'react';
import fieldValidation from './fieldValidation';
import initialState from './initialState';
import {
 fieldChange,
 fieldIsValid,
 fieldIsNotValid,
 fieldIsEmpty,
} from './fieldChanges';

export default function useAddClientForm() {
 const [form, setForm] = useState(initialState);

 const validForm = () => {
  const {
   nameIsValid,
   cedulaIsValid,
   addressIsValid,
   phoneIsValid,
   emailIsValid,
  } = form;

  if (
   nameIsValid &&
   cedulaIsValid &&
   addressIsValid &&
   phoneIsValid &&
   emailIsValid
  ) {
   return true;
  } else {
   return false;
  }
 };

 const handleChange = (name, value) => {
  validForm();

  const fieldIsNotEmpty = value.trim().length !== 0;

  const fieldIsEmpty = (
   name,
   value,
   IsValidValue,
   InputChangeValue,
   form,
   setForm
  ) => {
   setForm({
    ...form,
    [name]: value,
    [`${name}IsValid`]: null,
    [`${name}InputChange`]: false,
   });
  };

  if (fieldIsNotEmpty) {
   fieldChange(name, value, true, form, setForm);
   if (!fieldValidation(name, value)) {
    fieldIsNotValid(name, value, false, true, form, setForm);
   } else {
    fieldIsValid(name, value, true, true, form, setForm);
   }
  } else {
   fieldIsEmpty();
  }
 };

 const handleSubmit = () => {
  if (validForm()) {
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
