export const fieldChange = (

  name,
  value,
  true,
  form,
  setForm,
  errors,
  setErrors,
  changes,
  setChanges

) => {
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
  [`${name}IsValid`]: IsValidValue,
  [`${name}InputChange`]: InputChangeValue,
 });
};

export const fieldIsEmpty = (
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
