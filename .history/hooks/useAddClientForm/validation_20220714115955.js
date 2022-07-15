export default function validation(form) {
 if (
  !form.name &&
  !form.cedula &&
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
 if (!form.cedula && !form.address && !form.phone && !form.email) {
  setForm({
   ...form,

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
