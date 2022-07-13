export const fieldChange = (name, value, InputChangeValue, form, setForm) => {
 setForm({
  ...form,
  [name]: value,
  [`${name}InputChange`]: InputChangeValue,
 });
};

export const fieldIsValid = (
 name,
 value,
 IsValidValue,
 InputChangeValue,
 form,
 setForm
) => {};
