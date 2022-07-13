const validForm = (errors) => {
 const {
  nameIsValid,
  cedulaIsValid,
  addressIsValid,
  phoneIsValid,
  emailIsValid,
 } = errors;

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

export default validForm;
