import { View, Text } from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';

const TextinputComponent = (
 name,
 label,
 activeUnderlineColor,
 value,
 handleChange,
 numberOfInput,
 form,
 errorStyle,
 errorMessage
) => {
 return (
  <>
   <TextInput
    name={name}
    label={label}
    activeUnderlineColor={activeUnderlineColor}
    value={value}
    onChangeText={(value) => handleChange(name, value)}
    onEndEditing={() => console.log('this is on blur')}
    onSubmitEditing={() => {
     this[numberOfInput].focus();
    }}
    blurOnSubmit={false}
    error={form[`${name}InputChange`] && form[`${name}IsValid`] ? false : true}
    theme={{
     ...DefaultTheme,
     colors: {
      error: 'red',
     },
    }}
   />
   {form[`${name}InputChange`] ? null : (
    <Text style={errorStyle}>El campo no puede estar vacio</Text>
   )}
   {form[`${name}IsValid`] || form[`${name}IsValid`] === null ? null : (
    <Text style={errorStyle}>{errorMessage}</Text>
   )}
  </>
 );
};

export default TextinputComponent;
