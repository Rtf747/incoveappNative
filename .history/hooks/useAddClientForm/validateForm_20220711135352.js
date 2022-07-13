export const validateForm = (form, target, setErrors, errors) => {
 const errorsMessages = {};

 const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
 const regexCedula = /^[0-9]{10}$/;
 const regexAddress = /^[#.0-9a-zA-Z\s,-]+$/;
 const regexPhone = /^[0-9]{10}$/;
 const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

 const nameValidation = () => {
  if (!form.name) {
   errorsMessages.name = 'El campo "Nombre" no puede estar vacio';
  } else if (!regexName.test(form.name.trim())) {
   errorsMessages.name =
    "El campo 'Nombre' solo acepta letras y espacios en blanco";
   setErrors({
    ...errors,
    name: "El campo 'Nombre' solo acepta letras y espacios en blanco",
   });
  } else {
   errorsMessages.name = true;
  }
 };

 const cedulaValidation = () => {
  if (!form.cedula) {
   errorsMessages.cedula = 'El campo "Cedula" no puede estar vacío';
  } else if (!regexCedula.test(form.cedula.trim())) {
   errorsMessages.cedula =
    "El campo 'Cedula' solo acepta numeros y debe tener 10 digitos";
  } else {
   errorsMessages.cedula = true;
  }
 };

 const addressValidation = () => {
  if (!form.address) {
   errorsMessages.address = 'El campo "Dirección" no puede estar vacío';
  } else if (!regexAddress.test(form.address.trim())) {
   errorsMessages.address =
    "El campo 'Dirección' no acepta caracteres especiales";
  } else {
   errorsMessages.address = true;
  }
 };

 const phoneValidation = () => {
  if (!form.phone) {
   errorsMessages.phone = 'El campo "Teléfono" no puede estar vacío';
  } else if (!regexPhone.test(form.phone.trim())) {
   errorsMessages.phone =
    "El campo 'Teléfono' solo acepta numeros y debe tener 10 digitos";
  } else {
   errorsMessages.phone = true;
  }
 };

 const emailValidation = () => {
  if (!form.email) {
   errorsMessages.email = 'El campo "Email" no puede estar vacio';
  } else if (!regexEmail.test(form.email.trim())) {
   errorsMessages.email = 'Parece que esto no es un correo electrónico.';
  } else {
   errorsMessages.email = true;
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

 return errorsMessages;
};
