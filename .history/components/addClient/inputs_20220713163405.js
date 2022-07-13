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
   this.secondTextInput.focus();
  },
  errorMessage: 'El campo no puede contener numeros',
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
