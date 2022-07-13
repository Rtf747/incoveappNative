export const fieldChange = (name, value, InputChangeValue, form, setForm) => {
 setForm({
  ...form,
  [name]: value,
  [`${name}InputChange`]: InputChangeValue,
 });
};
