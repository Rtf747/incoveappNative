export const fieldChange = (name, value, boolean) => {
 setForm({
  ...form,
  [name]: value,
  [`${name}InputChange`]: boolean,
 });
};
