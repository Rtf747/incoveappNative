const validForm = (form) => {
 const {
  nameIsValid,
  lastNameIsValid,
  cedulaIsValid,
  addressIsValid,
  phoneIsValid,
  emailIsValid,
 } = form;

 if (
  nameIsValid &&
  lastNameIsValid &&
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

export default validForm;
