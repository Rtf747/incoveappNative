const validForm = (form) => {
 console.log(form);
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
