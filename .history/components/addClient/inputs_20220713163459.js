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
  label: 'Cedula',
  onSubmitEditing: () => {
   this.thirdTextInput.focus();
  },
  errorMessage: 'El campo debe tener al menos 10 digitos',
  ref: (input) => {
   this.secondTextInput = input;
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
