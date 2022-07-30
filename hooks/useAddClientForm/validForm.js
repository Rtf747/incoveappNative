const validForm = (form) => {
 const {
  nameIsValid,
  lastNameIsValid,
  documentTypeIsValid,
  cedulaIsValid,
  departmentIsValid,
  cityIsValid,
  addressIsValid,
  phoneIsValid,
  emailIsValid,
 } = form;

 if (
  nameIsValid &&
  lastNameIsValid &&
  documentTypeIsValid &&
  cedulaIsValid &&
  departmentIsValid &&
  cityIsValid &&
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
