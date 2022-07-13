export const validateForm = (form, target) => {
 const errors = {};

 const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
 const regexCedula = /^[0-9]{10}$/;
 const regexAddress = /^[#.0-9a-zA-Z\s,-]+$/;
 const regexPhone = /^[0-9]{10}$/;
 const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
};
