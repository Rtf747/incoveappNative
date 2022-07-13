import { View, Text } from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';

const TextinputComponent = (name, label) => {
 return <TextInput name={name} label={label} />;
};

export default TextinputComponent;
