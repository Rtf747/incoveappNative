import { View, Text } from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';

const TextinputComponent = (name) => {
 return <TextInput name={name} label={name} />;
};

export default TextinputComponent;