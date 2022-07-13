export const fieldChange = (name, value, boolean, setForm) => {
 setForm({
  ...form,
  [name]: value,
  [`${name}InputChange`]: boolean,
 });
};
