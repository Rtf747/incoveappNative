export const fieldChange = (name, value, InputChangeValue, form, setForm) => {
 setForm({
  ...form,
  [name]: value,
  [`${name}InputChange`]: InputChangeValue,
 });
};

export const fieldIsNotValid = (
 name,
 value,
 IsValidValue,
 InputChangeValue,
 form,
 setForm
) => {
 setForm({
  ...form,
  [name]: value,
  [`${name}IsValid`]: false,
  [`${name}InputChange`]: true,
 });
};

export const fieldIsValid = (
 name,
 value,
 IsValidValue,
 InputChangeValue,
 form,
 setForm
) => {
 setForm({
  ...form,
  [name]: value,
  [`${name}IsValid`]: IsValidValue,
  [`${name}InputChange`]: InputChangeValue,
 });
};
