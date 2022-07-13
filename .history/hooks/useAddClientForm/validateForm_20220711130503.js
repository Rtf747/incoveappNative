export const validateForm = (form, target) => {
 console.log('corriendo');
 const errors = {};

 const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
 const regexCedula = /^[0-9]{10}$/;
 const regexAddress = /^[#.0-9a-zA-Z\s,-]+$/;
 const regexPhone = /^[0-9]{10}$/;
 const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

 const nameValidation = () => {
  if (!form.name) {
   errors.name = 'El campo "Nombre" no puede estar vacio';
  } else if (!regexName.test(form.name.trim())) {
   errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  } else {
   errors.name = true;
  }
 };

 const cedulaValidation = () => {
  if (!form.cedula) {
   errors.cedula = 'El campo "Cedula" no puede estar vacío';
  } else if (!regexCedula.test(form.cedula.trim())) {
   errors.cedula =
    "El campo 'Cedula' solo acepta numeros y debe tener 10 digitos";
  } else {
   errors.cedula = true;
  }
 };

 const addressValidation = () => {
  if (!form.address) {
   errors.address = 'El campo "Dirección" no puede estar vacío';
  } else if (!regexAddress.test(form.address.trim())) {
   errors.address = "El campo 'Dirección' no acepta caracteres especiales";
  } else {
   errors.address = true;
  }
 };

 const phoneValidation = () => {
  if (!form.phone) {
   errors.phone = 'El campo "Teléfono" no puede estar vacío';
  } else if (!regexPhone.test(form.phone.trim())) {
   errors.phone =
    "El campo 'Teléfono' solo acepta numeros y debe tener 10 digitos";
  } else {
   errors.phone = true;
  }
 };

 const emailValidation = () => {
  if (!form.email) {
   errors.email = 'El campo "Email" no puede estar vacio';
  } else if (!regexEmail.test(form.email.trim())) {
   errors.email = 'Parece que esto no es un correo electrónico.';
  } else {
   errors.email = true;
  }
 };

 const validateAll = () => {
  nameValidation();
  cedulaValidation();
  addressValidation();
  phoneValidation();
  emailValidation();
 };

 const selectValidation = (target) => {
  const validations = {
   name: nameValidation,
   cedula: cedulaValidation,
   address: addressValidation,
   phone: phoneValidation,
   email: emailValidation,
   undefined: validateAll,
  };

  const select = validations[target];

  return select();
 };

 selectValidation(target);

 return errors;
};
