import { View, Text } from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';
import { globalStyles } from '../../styles/global';

const TextinputComponent = (input, form, handleChange, changes, errors) => {
 return (
  <>
   {console.log(errors)}
   {/*  <TextInput
    key={input.id}
    name={input.name}
    label={input.label}
    activeUnderlineColor={globalStyles.palette.primary[100]}
    style={{
     backgroundColor: globalStyles.palette.primary[10],
    }}
    value={form[input.name]}
    handleChange={(value) => handleChange(input.name, value)}
    onSubmitEditing={input.onSubmitEditing}
    blurOnSubmit={false}
    error={
     changes[`${input.name}InputChange`] && errors[`${input.name}IsValid`]
      ? false
      : true
    }
    ref={input.ref}
    theme={{
     ...DefaultTheme,
     colors: {
      error: 'red',
     },
    }}
   />
   {changes[`${input.name}InputChange`] ? null : (
    <Text style={styles.errorText}>El campo no puede estar vacio</Text>
   )}
   {errors[`${input.name}IsValid`] ||
   errors[`${input.name}IsValid`] === null ? null : (
    <Text style={styles.errorText}>{input.errorMessage}</Text>
   )} */}
  </>
 );
};

export default TextinputComponent;
