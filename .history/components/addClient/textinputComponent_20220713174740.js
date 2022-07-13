import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput, DefaultTheme } from 'react-native-paper';
import { globalStyles } from '../../styles/global';
const a = [1, 2, 3, 4, 5];

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
   <FlatList
    data={inputs}
    renderItem={({ item }) => (
     <TextInput
      name={item.name}
      label={item.label}
      activeUnderlineColor={globalStyles.palette.primary[100]}
      style={{
       backgroundColor: globalStyles.palette.primary[10],
      }}
      value={form[item.name]}
     />
    )}
   />

   {/* {inputs.map((input) => {
    <TextInput
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
    />;
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
   })} */}
  </>
 );
};

export default TextinputComponent;
