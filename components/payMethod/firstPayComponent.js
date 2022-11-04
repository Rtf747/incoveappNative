import { StyleSheet, Text, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';

export default function FirstPayComponent({ handleChange }) {
 return (
  <>
   <View>
    <Text style={styles.firstPay}>Abono inicial</Text>
   </View>
   <View style={styles.installmentContainer}>
    <Text style={styles.prefix}>$</Text>
    <MaskedTextInput
     maxLength={11}
     type='currency'
     options={{
      decimalSeparator: '.',
      groupSeparator: ',',
      precision: 2,
     }}
     onChangeText={(text, rawText) => {
      handleChange(text);
     }}
     style={styles.firstPayInput}
     keyboardType='numeric'
    />
   </View>
  </>
 );
}

const styles = StyleSheet.create({
 firstPay: {
  fontWeight: 'bold',
  paddingTop: 20,
  borderTopWidth: 1,
  borderTopColor: '#e6e6e6',
 },

 installmentContainer: {
  flex: 0.2,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#e6e6e6',
 },
 prefix: {
  fontSize: 30,
 },
 firstPayInput: {
  fontSize: 30,
 },
});
