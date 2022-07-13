import { View, Text } from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';
import { globalStyles } from '../../styles/global';

const TextinputComponent = ({
 inputs,
 form,
 handleChange,
 changes,
 errors,
 styles,
}) => {
 console.log(styles);
 return (
  <>
   {inputs.map((input) => {
    <TextInput />;
   })}
  </>
 );
};

export default TextinputComponent;

/* <TextInput
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
    /> */
