export const initialState = {
 name: '',
 cedula: '',
 address: '',
 phone: '',
 email: '',
};

export const initialErrors = [
 {
  nameIsValid: null,
  cedulaIsValid: null,
  addressIsValid: null,
  phoneIsValid: null,
  emailIsValid: null,
 },
];

export const initialChanges = [
 {
  nameInputChange: true,
  cedulaInputChange: true,
  addressInputChange: true,
  phoneInputChange: true,
  emailInputChange: true,
 },
];
