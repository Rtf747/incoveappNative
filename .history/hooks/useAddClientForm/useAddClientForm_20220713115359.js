import { useState } from 'react';
import { validateForm } from './validateForm';

export default function useAddClientForm() {
 const [form, setForm] = useState({
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
 });

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
   console.log('estoy en true');
   return true;
  } else {
   console.log('estoy en false');
   return false;
  }
 };

 const selectValidation = (target, value) => {
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

 const handleChange = (name, value) => {
  validForm();

  if (value.trim().length !== 0) {
   setForm({
    ...form,
    [name]: value,
    [`${name}InputChange`]: true,
   });
   if (!selectValidation(name, value)) {
    setForm({
     ...form,
     [name]: value,
     [`${name}IsValid`]: false,
     [`${name}InputChange`]: true,
    });
   } else {
    setForm({
     ...form,
     [name]: value,
     [`${name}IsValid`]: true,
     [`${name}InputChange`]: true,
    });
   }
  } else {
   setForm({
    ...form,
    [name]: value,
    [`${name}IsValid`]: null,
    [`${name}InputChange`]: false,
   });
  }
 };

 const handleSubmit = () => {
  //setErrors(validateForm(form, undefined));

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
