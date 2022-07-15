import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import NumberFormat from 'react-number-format';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';

export default function PayMethod({ navigation }) {
 const [checked, setChecked] = useState('12');
 const [total, setTotal] = useState(2255000.99);
 const [cuota, setCuota] = useState({
  cuota: parseInt(12),
 });

 const handleChange = (value) => {
  setCuota({
   ...cuota,
   cuota: value,
  });
 };

 const step = 1;
 return (
  <>
   <View style={styles.container}>
    <View style={styles.stepContainer}>
     <StepIndicatorComponent step={step} />
    </View>
    <View
     style={{
      alignItems: 'center',
     }}>
     <Text>Numero de cuotas</Text>
    </View>
    <View style={styles.inputTextContainer}>
     <TextInput
      autoFocus={true}
      keyboardType='numeric'
      onChangeText={(value) => handleChange(value)}
      style={{
       fontSize: 60,
      }}
      value={12}
     />
    </View>
    <View style={styles.cuotasContainer}>
     <View style={styles.radioButtonGroup}>
      <Text
       style={{
        color:
         checked === '12'
          ? globalStyles.palette.primary[100]
          : globalStyles.palette.neutral[50],
       }}>
       12 cuotas
      </Text>
      <RadioButton
       uncheckedColor={globalStyles.palette.neutral[50]}
       color={globalStyles.palette.primary[100]}
       value='12'
       status={checked === '12' ? 'checked' : 'unchecked'}
       onPress={() => setChecked('12')}
      />
     </View>
     <View style={styles.radioButtonGroup}>
      <Text
       style={{
        color:
         checked === '24'
          ? globalStyles.palette.primary[100]
          : globalStyles.palette.neutral[50],
       }}>
       24 cuotas
      </Text>
      <RadioButton
       uncheckedColor={globalStyles.palette.neutral[50]}
       color={globalStyles.palette.primary[100]}
       value='24'
       status={checked === '24' ? 'checked' : 'unchecked'}
       onPress={() => setChecked('24')}
      />
     </View>
     <View style={styles.radioButtonGroup}>
      <Text
       style={{
        color:
         checked === '36'
          ? globalStyles.palette.primary[100]
          : globalStyles.palette.neutral[50],
       }}>
       36 cuotas
      </Text>
      <RadioButton
       uncheckedColor={globalStyles.palette.neutral[50]}
       color={globalStyles.palette.primary[100]}
       value='36'
       status={checked === '36' ? 'checked' : 'unchecked'}
       onPress={() => setChecked('36')}
      />
     </View>
    </View>
    <View style={styles.installmentContainer}>
     <Text>
      {checked === '12' ? (
       <NumberFormat
        value={total / 12}
        displayType='text'
        thousandSeparator='.'
        decimalSeparator=','
        decimalScale={2}
        prefix='$'
        renderText={(value) => <Text style={styles.installment}>{value}</Text>}
       />
      ) : checked === '24' ? (
       <NumberFormat
        value={total / 24}
        displayType='text'
        thousandSeparator='.'
        decimalSeparator=','
        decimalScale={2}
        prefix='$'
        renderText={(value) => <Text style={styles.installment}>{value}</Text>}
       />
      ) : (
       <NumberFormat
        value={total / 36}
        displayType='text'
        thousandSeparator='.'
        decimalSeparator=','
        decimalScale={2}
        prefix='$'
        renderText={(value) => <Text style={styles.installment}>{value}</Text>}
       />
      )}
     </Text>
     <Text>Monto a pagar por cuota</Text>
    </View>
    {/* <View style={styles.totalContainer}>
     <Text style={globalStyles.typography.regular[2]}>Total</Text>
     <NumberFormat
      value={total}
      displayType='text'
      thousandSeparator='.'
      decimalSeparator=','
      decimalScale={2}
      prefix='$'
      renderText={(value) => (
       <Text style={globalStyles.typography.semiBold[2]}>{value}</Text>
      )}
     />
    </View> */}
    <View style={styles.buttonContainer}>
     <Pressable
      android_ripple={{ color: '#fff' }}
      style={styles.buttonCash}
      onPress={() => navigation.navigate('saleSummary')}>
      <Text style={styles.textButtonCash}>Aceptar</Text>
     </Pressable>
     {/*  <Pressable
      android_ripple={{ color: '#fff' }}
      style={styles.buttonCard}
      onPress={() => navigation.navigate('saleSummary')}>
      <Text style={styles.textButtonCard}>Tarjeta</Text>
     </Pressable> */}
    </View>
   </View>
  </>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
  paddingHorizontal: 24,
 },
 stepContainer: {
  paddingVertical: 16,
 },

 inputTextContainer: {
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'center',
  //backgroundColor: 'peru',
 },

 cuotasContainer: {
  flex: 0.5,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  //backgroundColor: 'papayawhip',
 },
 installmentContainer: {
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'center',
  //backgroundColor: 'pink',
 },
 totalContainer: {
  flex: 0.5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTopWidth: 1,
  borderColor: globalStyles.palette.neutral[10],
  paddingHorizontal: 28,
  backgroundColor: 'paleturquoise',
 },

 installment: [
  {
   fontSize: 50,
  },
  //   globalStyles.typography.semiBold[1]
 ],
 radioButtonGroup: {
  alignItems: 'center',
  flexDirection: 'column-reverse',
 },

 buttonContainer: {
  flex: 0.5,
  justifyContent: 'flex-end',
 },
 buttonCash: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
  marginBottom: 8,
 },
 textButtonCash: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
 },

 /*  textButtonCard: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: globalStyles.palette.neutral[80],
 }, */
 /*  buttonCard: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,

  marginVertical: 8,
  borderWidth: 1,
  borderColor: globalStyles.palette.neutral[10],
 }, */
});
