import { View, Text } from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';

const TextinputComponent = (
 name,
 label,
 activeUnderlineColor,
 style,
 value,
 handleChange,
 numberOfInput
) => {
 return (
  <TextInput
   name={name}
   label={label}
   activeUnderlineColor={activeUnderlineColor}
   style={style}
   value={value}
   onChangeText={(value) => handleChange(name, value)}
   onEndEditing={() => console.log('this is on blur')}
   onSubmitEditing={() => {
    this[numberOfInput].focus();
   }}
   blurOnSubmit={false}
   error={form.nameInputChange && form.nameIsValid ? false : true}
  />
 );
};

export default TextinputComponent;
