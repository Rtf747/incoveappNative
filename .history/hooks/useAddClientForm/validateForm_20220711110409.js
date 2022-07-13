export const validateForm = (form, target) => {
 const errors = {};

 const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
 const regexCedula = /^[0-9]{10}$/;
 const regexPhone = /^[0-9]{10}$/;

 const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 const regexPassword = /^.{4,12}$/; // 4 to 12 digits
};
