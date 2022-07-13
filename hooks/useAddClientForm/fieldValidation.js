const fieldValidation = (target, value) => {
 const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
 const cedulaRegex = /^[0-9]{10}$/;
 const addressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
 const phoneRegex = /^[0-9]{10}$/;
 const emailRegex = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

 const validations = {
  name: nameRegex.test(value.trim()),
  cedula: cedulaRegex.test(value.trim()),
  address: addressRegex.test(value.trim()),
  phone: phoneRegex.test(value.trim()),
  email: emailRegex.test(value.trim()),
 };

 const select = validations[target];

 return select;
};

export default fieldValidation;
