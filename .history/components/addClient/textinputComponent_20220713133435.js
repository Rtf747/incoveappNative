import { View, Text } from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';

const TextinputComponent = (name, label, activeUnderlineColor, style) => {
 return (
  <TextInput
   name={name}
   label={label}
   activeUnderlineColor={activeUnderlineColor}
   style={style}
  />
 );
};

export default TextinputComponent;
