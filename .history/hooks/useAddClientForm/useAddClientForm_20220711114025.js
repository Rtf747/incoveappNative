import { useState } from 'react';

export default function useAddClientForm() {
 const [errors, setErrors] = useState({
  name: '',
  cedula: '',
  address: '',
  phone: '',
  email: '',
 });

 const [form, setForm] = useState({
  name: '',
  cedula: '',
  address: '',
  phone: '',
  email: '',
 });

 const handleChange = (name, value) => {
  setForm({ ...form, [name]: value });
 };

 const handleSubmit = () => {
  console.log(form);
  setErrors(validateForm(form, undefined));
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
  handleChange,
  handleSubmit,
 };
}
