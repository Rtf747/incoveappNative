import { Text, View, StyleSheet, Pressable } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import { RadioButton } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useQuota from '../../hooks/useQuota/useQuota';
import InaccurateQuotas from '../../components/payMethod/inaccurateQuotas';
import ExactQuotas from '../../components/payMethod/exactQuotas';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaskedTextInput } from 'react-native-mask-text';

export default function PayMethod({ navigation }) {
 const [lastQuota, setLastQuota] = useState('');
 const [cuota, setCuota] = useState('12');
 const [quotaAmount, setQuotaAmount] = useState('');
 const [typeOfQuota, setTypeOfQuota] = useState('exactQuotas');
 const [payInterval, setPayInterval] = useState('daily');
 const [initialPay, setInitialPay] = useState(0);

 const cart = useSelector((state) => state.inventory.cart);

 const totalAmount = cart
  .map((product) => product.quantity * product.productPrice)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

 const { quotaValidator } = useQuota();

 const handleChange = (value) => {
  console.log(value);
  setInitialPay(value);
 };

 useEffect(() => {
  const numberOFQuotas = quotaValidator(totalAmount).numberOfQuotas;
  const quotaAmount = quotaValidator(totalAmount).quotaAmount;
  const lastQuota = quotaValidator(totalAmount).lastQuota;

  setTypeOfQuota(quotaValidator(totalAmount).id);
  setQuotaAmount(quotaAmount);
  setCuota(numberOFQuotas);
  setLastQuota(lastQuota);
 }, []);

 const step = 1;
 return (
  <>
   <View style={styles.container}>
    <KeyboardAwareScrollView
     contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'space-between',
     }}>
     <View style={styles.stepContainer}>
      <StepIndicatorComponent step={step} />
     </View>
     {typeOfQuota === 'exactQuotas' ? (
      <ExactQuotas
       totalAmount={totalAmount}
       cuota={cuota}
       quotaAmount={quotaAmount}
      />
     ) : (
      <InaccurateQuotas
       totalAmount={totalAmount}
       cuota={cuota}
       quotaAmount={quotaAmount}
       lastQuota={lastQuota}
      />
     )}
     <View
      style={{
       borderTopColor: '#e6e6e6',
       borderTopWidth: 1,
       paddingTop: 20,
      }}>
      <Text
       style={{
        fontWeight: 'bold',
       }}>
       Intervalo de pagos
      </Text>
     </View>
     <View style={styles.cuotasContainer}>
      <View style={styles.radioButtonGroup}>
       <Text
        style={{
         color:
          payInterval === 'daily'
           ? globalStyles.palette.primary[100]
           : globalStyles.palette.neutral[50],
        }}>
        Diario
       </Text>
       <RadioButton
        uncheckedColor={globalStyles.palette.neutral[50]}
        color={globalStyles.palette.primary[100]}
        value='daily'
        status={payInterval === 'daily' ? 'checked' : 'unchecked'}
        onPress={() => setPayInterval('daily')}
       />
      </View>
      <View style={styles.radioButtonGroup}>
       <Text
        style={{
         color:
          payInterval === 'weekly'
           ? globalStyles.palette.primary[100]
           : globalStyles.palette.neutral[50],
        }}>
        Semanal
       </Text>
       <RadioButton
        uncheckedColor={globalStyles.palette.neutral[50]}
        color={globalStyles.palette.primary[100]}
        value='weekly'
        status={payInterval === 'weekly' ? 'checked' : 'unchecked'}
        onPress={() => setPayInterval('weekly')}
       />
      </View>
      <View style={styles.radioButtonGroup}>
       <Text
        style={{
         color:
          payInterval === 'fortnightly'
           ? globalStyles.palette.primary[100]
           : globalStyles.palette.neutral[50],
        }}>
        Quincenal
       </Text>
       <RadioButton
        uncheckedColor={globalStyles.palette.neutral[50]}
        color={globalStyles.palette.primary[100]}
        value='fortnightly'
        status={payInterval === 'fortnightly' ? 'checked' : 'unchecked'}
        onPress={() => setPayInterval('fortnightly')}
       />
      </View>
      <View style={styles.radioButtonGroup}>
       <Text
        style={{
         color:
          payInterval === 'monthly'
           ? globalStyles.palette.primary[100]
           : globalStyles.palette.neutral[50],
        }}>
        Mensual
       </Text>
       <RadioButton
        uncheckedColor={globalStyles.palette.neutral[50]}
        color={globalStyles.palette.primary[100]}
        value='monthly'
        status={payInterval === 'monthly' ? 'checked' : 'unchecked'}
        onPress={() => setPayInterval('monthly')}
       />
      </View>
     </View>
     <View>
      <Text
       style={{
        fontWeight: 'bold',
        marginTop: 20,
       }}>
       Abono inicial
      </Text>
     </View>
     <View style={styles.installmentContainer}>
      <MaskedTextInput
       type='currency'
       options={{
        prefix: '$',
        decimalSeparator: '.',
        groupSeparator: ',',
        precision: 2,
       }}
       onChangeText={(text, rawText) => {
        console.log(text);
        setInitialPay(text);
        //console.log(rawText);
       }}
       style={{
        fontSize: 30,
       }}
       keyboardType='numeric'
      />
     </View>

     <View style={styles.buttonContainer}>
      <Pressable
       android_ripple={{ color: '#fff' }}
       style={styles.buttonCash}
       onPress={() => navigation.navigate('saleSummary')}>
       <Text style={styles.textButtonCash}>Aceptar</Text>
      </Pressable>
     </View>
    </KeyboardAwareScrollView>
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
 leftContainer: {
  color: globalStyles.palette.neutral[50],
  flex: 1,
 },
 rightContainer: {
  flex: 1,
  textAlign: 'right',
 },
 descriptionContainer: {
  flex: 0.1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 16,
 },
 inputTextContainer: {
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: 'peru',
 },

 cuotasContainer: {
  flex: 0.3,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderBottomColor: '#e6e6e6',
  borderBottomWidth: 1,
  paddingBottom: 20,
  //backgroundColor: 'papayawhip',
 },
 installmentContainer: {
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'center',
  //backgroundColor: 'pink',
  paddingVertical: 10,
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
});
