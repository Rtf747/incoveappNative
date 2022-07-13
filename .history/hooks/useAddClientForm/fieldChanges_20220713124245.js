export const fieldChange = (name, value, boolean, form, setForm) => {
 setForm({
  ...form,
  [name]: value,
  [`${name}InputChange`]: boolean,
 });
};
