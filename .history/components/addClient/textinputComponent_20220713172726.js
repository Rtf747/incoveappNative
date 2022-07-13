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
    {
     changes[`${input.name}InputChange`] ? null : (
      <Text style={styles.errorText}>El campo no puede estar vacio</Text>
     );
    }
    {
     errors[`${input.name}IsValid`] ||
     errors[`${input.name}IsValid`] === null ? null : (
      <Text style={styles.errorText}>{input.errorMessage}</Text>
     );
    }
   })}
  </>
 );
};

export default TextinputComponent;
