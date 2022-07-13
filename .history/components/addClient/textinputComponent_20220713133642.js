import { View, Text } from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';

const TextinputComponent = (
 name,
 label,
 activeUnderlineColor,
 style,
 value,
 handleChange
) => {
 return (
  <TextInput
   name={name}
   label={label}
   activeUnderlineColor={activeUnderlineColor}
   style={style}
   value={value}
   onChangeText={(value) => handleChange(name, value)}
   onEndEditing={() => console.log('esto es onblur')}
  />
 );
};

export default TextinputComponent;
