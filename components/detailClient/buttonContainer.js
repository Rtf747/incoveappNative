import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function ButtonContainer({ onSubmit }) {
 return (
  <View style={styles.buttonContainer}>
   <Pressable
    style={styles.button}
    android_ripple={{ color: '#fff' }}
    onPress={onSubmit}>
    <Text style={styles.textButton}>Seleccionar cliente</Text>
   </Pressable>
  </View>
 );
}

const styles = StyleSheet.create({
 buttonContainer: {
  flex: 1,
  justifyContent: 'flex-end',
  marginTop: 24,
 },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
  marginVertical: 8,
 },
 textButton: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
 },
});
