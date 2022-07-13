import { useState } from 'react';
import { validateForm } from './validateForm';

export default function useAddClientForm() {
 const [errors, setErrors] = useState({
  name: null,
  cedula: null,
  address: null,
  phone: null,
  email: null,
 });

 const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
 const cedulaRegex = /^[0-9]{10}$/;
 const addressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
 const phoneRegex = /^[0-9]{10}$/;
 const emailRegex = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

 const [form, setForm] = useState({
  name: '',
  cedula: '',
  address: '',
  phone: '',
  email: '',
  nameIsValid: true,
  cedulaIsValid: true,
  addressIsValid: true,
  phoneIsValid: true,
  emailIsValid: true,
  nameInputChange: true,
  cedulaInputChange: true,
  addressInputChange: true,
  phoneInputChange: true,
  emailInputChange: true,
 });
 //false === da error // true === no da error
 const handleChange = (name, value) => {
  if (value.trim().length !== 0) {
   setForm({
    ...form,
    [name]: value,
    [`${name}InputChange`]: true,
   });
   // console.log(nameRegex.test(value.trim()));
  } else {
   setForm({
    ...form,
    [name]: value,
    [`${name}InputChange`]: false,
   });
  }
 };

 const handleSubmit = () => {
  //setErrors(validateForm(form, undefined));

  if (
   errors.name === true &&
   errors.cedula === true &&
   errors.address === true &&
   errors.phone === true &&
   errors.email === true
  ) {
   console.log(form);
  } else {
   console.log(errors);
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
  errors,
  handleChange,
  handleSubmit,
 };
}
