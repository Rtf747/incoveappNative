import { Pressable, StyleSheet, Text, View } from 'react-native';
import NumberFormat from 'react-number-format';
import { globalStyles } from '../../styles/global';

export default function ButtonComponent({ navigation, totalAmount }) {
 return (
  <View style={styles.buttonContainer}>
   <Pressable
    style={styles.button}
    android_ripple={{ color: '#fff' }}
    onPress={() => navigation.navigate('addClient')}>
    <Text style={styles.textButton}>Procesar</Text>
    <NumberFormat
     value={totalAmount}
     displayType='text'
     thousandSeparator='.'
     decimalSeparator=','
     prefix='$'
     renderText={(value) => <Text style={styles.textButton}>{value}</Text>}
    />
   </Pressable>
  </View>
 );
}

const styles = StyleSheet.create({
 button: {
  marginHorizontal: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
 },
 textButton: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
 },
 buttonContainer: {
  flex: 0.5,
  justifyContent: 'center',
  backgroundColor: 'white',
 },
});
