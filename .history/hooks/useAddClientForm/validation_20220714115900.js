export default function validation(form) {
 if (
  !form.cedula &&
  !form.name &&
  !form.address &&
  !form.phone &&
  !form.email
 ) {
  setForm({
   ...form,
   nameIsValid: null,
   nameInputChange: false,
   cedulaIsValid: null,
   cedulaInputChange: false,
   addressIsValid: null,
   addressInputChange: false,
   phoneIsValid: null,
   phoneInputChange: false,
   emailIsValid: null,
   emailInputChange: false,
  });
 }
}
