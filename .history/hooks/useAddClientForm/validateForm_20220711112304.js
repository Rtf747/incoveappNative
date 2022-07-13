export const validateForm = (form, target) => {
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
};
