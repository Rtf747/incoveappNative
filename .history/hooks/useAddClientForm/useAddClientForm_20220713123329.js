import { useState } from 'react';
import fieldValidation from './fieldValidation';

const initialState = {
 name: '',
 cedula: '',
 address: '',
 phone: '',
 email: '',
 nameIsValid: null,
 cedulaIsValid: null,
 addressIsValid: null,
 phoneIsValid: null,
 emailIsValid: null,
 nameInputChange: true,
 cedulaInputChange: true,
 addressInputChange: true,
 phoneInputChange: true,
 emailInputChange: true,
};

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

 /*  const fieldValidation = (target, value) => {
  const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const cedulaRegex = /^[0-9]{10}$/;
  const addressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  const validations = {
   name: nameRegex.test(value.trim()),
   cedula: cedulaRegex.test(value.trim()),
   address: addressRegex.test(value.trim()),
   phone: phoneRegex.test(value.trim()),
   email: emailRegex.test(value.trim()),
  };

  const select = validations[target];

  return select;
 };
 */
 const handleChange = (name, value) => {
  validForm();

  const fieldIsNotEmpty = value.trim().length !== 0;
  const fieldChange = (boolean) => {
   setForm({
    ...form,
    [name]: value,
    [`${name}InputChange`]: boolean,
   });
  };
  const fieldIsNotValid = () => {
   setForm({
    ...form,
    [name]: value,
    [`${name}IsValid`]: false,
    [`${name}InputChange`]: true,
   });
  };

  const fieldIsValid = () => {
   setForm({
    ...form,
    [name]: value,
    [`${name}IsValid`]: true,
    [`${name}InputChange`]: true,
   });
  };

  const fieldIsEmpty = () => {
   setForm({
    ...form,
    [name]: value,
    [`${name}IsValid`]: null,
    [`${name}InputChange`]: false,
   });
  };

  if (fieldIsNotEmpty) {
   fieldChange(true);
   if (!fieldValidation(name, value)) {
    fieldIsNotValid();
   } else {
    fieldIsValid();
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