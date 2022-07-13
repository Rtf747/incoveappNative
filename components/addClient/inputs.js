export const inputs = [
 {
  id: 1,
  name: 'name',
  label: 'Nombre',
  onSubmitEditing: () => {
   this.secondTextInput.focus();
  },
  errorMessage: 'El campo no puede contener numeros',
  ref: (input) => {
   this.firstTextInput = input;
  },
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
  errorMessage: 'El campo no acepta caracteres especiales',
  ref: (input) => {
   this.thirdTextInput = input;
  },
 },
 {
  id: 4,
  name: 'phone',
  label: 'Teléfono',
  onSubmitEditing: () => {
   this.fifthTextInput.focus();
  },
  errorMessage: 'El campo debe tener al menos 10 digitos',
  ref: (input) => {
   this.fourthTextInput = input;
  },
 },
 {
  id: 5,
  name: 'email',
  label: 'Correo electrónico',
  errorMessage: 'Parece que esto no es un correo electronico',
  ref: (input) => {
   this.fifthTextInput = input;
  },
 },
];
