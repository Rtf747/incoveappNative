export const fieldChange = (
 name,
 value,
 InputChangeValue,
 form,
 setForm,
 changes,
 setChanges
) => {
 setForm({
  ...form,
  [name]: value,
  [`${name}InputChange`]: InputChangeValue,
 });
 setChanges({
  ...changes,
  [`${name}InputChange`]: InputChangeValue,
 });
};

export const fieldIsNotValid = (
 name,
 value,
 IsValidValue,
 InputChangeValue,
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
 });
 setErrors({
  ...errors,
  [`${name}IsValid`]: IsValidValue,
 });
 setChanges({
  ...changes,
  [`${name}InputChange`]: InputChangeValue,
 });
};

export const fieldIsEmpty = (
 name,
 value,
 IsValidValue,
 InputChangeValue,
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
 });
 setErrors({
  ...errors,
  [`${name}IsValid`]: IsValidValue,
 });
 setChanges({
  ...changes,
  [`${name}InputChange`]: InputChangeValue,
 });
};

export const fieldIsValid = (
 name,
 value,
 IsValidValue,
 InputChangeValue,
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
 });
 setErrors({
  ...errors,
  [`${name}IsValid`]: IsValidValue,
 });
 setChanges({
  ...changes,
  [`${name}InputChange`]: InputChangeValue,
 });
};
