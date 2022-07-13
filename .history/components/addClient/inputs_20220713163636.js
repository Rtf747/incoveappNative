export const inputs = [
 {
  id: 1,
  name: 'name',
  label: 'Nombre',
  onSubmitEditing: () => {
   this.secondTextInput.focus();
  },
  errorMessage: 'El campo no puede contener numeros',
 },
 {
  id: 2,
  name: 'cedula',
  label: 'Dirección',
  onSubmitEditing: () => {
   this.thirdTextInput.focus();
  },
  errorMessage: 'El campo debe tener al menos 10 digitos',
  ref: (input) => {
   this.secondTextInput = input;
  },
 },
 {
  id: 3,
  name: 'address',
  label: 'Dirección',
  onSubmitEditing: () => {
   this.fourthTextInput.focus();
  },
  errorMessage: 'El campo debe tener al menos 10 digitos',
  ref: (input) => {
   this.thirdTextInput = input;
  },
 },
];

/* 
export const initialState = {
  name: '',
  cedula: '',
  address: '',
  phone: '',
  email: '',
 };
  */
