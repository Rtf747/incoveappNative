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

 const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
 const regexCedula = /^[0-9]{10}$/;
 const regexAddress = /^[#.0-9a-zA-Z\s,-]+$/;
 const regexPhone = /^[0-9]{10}$/;
 const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

 const [form, setForm] = useState({
  name: '',
  cedula: '',
  address: '',
  phone: '',
  email: '',
  NameIsValid: true,
  CedulaIsValid: true,
  AddressIsValid: true,
  PhoneIsValid: true,
  EmailIsValid: true,
  nameInputChange: true,
  cedulaInputChange: true,
  addressInputChange: true,
  phoneInputChange: true,
  emailInputChange: true,
 });

 const handleChange = (name, value) => {
  if (value.trim().length !== 0) {
   setForm({
    ...form,
    [name]: value,
    [`isValid${name}`]: true,
   });
  } else {
   setForm({
    ...form,
    [name]: value,
    [`isValid${name}`]: false,
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
