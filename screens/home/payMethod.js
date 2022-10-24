import { Text, View, StyleSheet, Pressable } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useQuota from '../../hooks/useQuota/useQuota';
import InaccurateQuotas from '../../components/payMethod/inaccurateQuotas';
import ExactQuotas from '../../components/payMethod/exactQuotas';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaskedTextInput } from 'react-native-mask-text';
import RadioButtonComponent from '../../components/payMethod/radioButton/radioButtonComponent';
import { radioButtons } from '../../data/radioButtons';
import { selectPayMethod } from '../../features/payMethod/payMethodSlice';
import { Snackbar } from 'react-native-paper';

const step = 1;

export default function PayMethod({ navigation }) {
 const cart = useSelector((state) => state.inventory.cart);

 const totalAmount = cart
  .map((product) => product.quantity * product.productPrice)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

 const [typeOfQuota, setTypeOfQuota] = useState('exactQuotas');
 //cantidad de cuotas a pagar
 const [cuota, setCuota] = useState('12');
 //monto de las cuotas
 const [quotaAmount, setQuotaAmount] = useState('');
 //monto de la ultima cuota
 const [lastQuota, setLastQuota] = useState('');
 //valor del radio button seleccionado
 const [payInterval, setPayInterval] = useState('daily');
 //abono inicial
 const [initialPay, setInitialPay] = useState('0');
 //valor restante a pagar
 const [totalCalculated, setTotalCalculated] = useState(totalAmount);
 //snackbar visible
 const [visible, setVisible] = useState(false);

 const [validation, setValidation] = useState(true);

 const dispatch = useDispatch();

 const { quotaValidator } = useQuota();

 const onDismissSnackBar = () => setVisible(false);

 const validationTotal = () => {
  if (totalCalculated < 0) {
   setValidation(false);
  } else {
   setValidation(true);
  }
 };

 const handleChange = (text) => {
  setInitialPay(text);
 };

 const onSubmit = () => {
  if (validation) {
   navigation.navigate('saleSummary');
   dispatch(
    selectPayMethod({
     typeOfQuota,
     numberOfPayments: cuota,
     quotaAmount: quotaAmount,
     lastQuota: lastQuota,
     payInterval: payInterval,
     initialPay: initialPay,
     totalCalculated: totalCalculated,
    })
   );
  } else {
   setVisible(true);
  }
 };

 useEffect(() => {
  validationTotal();
 }, [totalCalculated]);

 useEffect(() => {
  const initialPayWithoutPrefix = initialPay.replace('$', '');
  const initialPayWithoutComma = initialPayWithoutPrefix.replace(',', '');
  const parsedInitialPay = parseFloat(initialPayWithoutComma);

  setTotalCalculated(totalAmount - parsedInitialPay);

  const numberOFQuotas = quotaValidator(
   totalAmount - parsedInitialPay
  ).numberOfQuotas;
  const quotaAmount = quotaValidator(
   totalAmount - parsedInitialPay
  ).quotaAmount;
  const lastQuota = quotaValidator(totalAmount - parsedInitialPay).lastQuota;

  setTypeOfQuota(quotaValidator(totalAmount - parsedInitialPay).id);
  setQuotaAmount(quotaAmount);
  setCuota(numberOFQuotas);
  setLastQuota(lastQuota);
 }, [initialPay]);

 return (
  <>
   <View style={styles.container}>
    <KeyboardAwareScrollView contentContainerStyle={styles.KeyboardAwareStyle}>
     <View style={styles.stepContainer}>
      <StepIndicatorComponent step={step} />
     </View>
     <View style={styles.intervalContainer}>
      <Text style={styles.interval}>Intervalo de pagos</Text>
     </View>
     <View style={styles.cuotasContainer}>
      {radioButtons.map((el) => (
       <RadioButtonComponent
        key={el.name}
        name={el.name}
        label={el.label}
        payInterval={payInterval}
        setPayInterval={setPayInterval}
       />
      ))}
     </View>
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
     {typeOfQuota === 'exactQuotas' ? (
      <ExactQuotas
       cuota={cuota}
       quotaAmount={quotaAmount}
       totalCalculated={totalCalculated}
      />
     ) : (
      <InaccurateQuotas
       totalAmount={totalAmount}
       cuota={cuota}
       quotaAmount={quotaAmount}
       lastQuota={lastQuota}
       totalCalculated={totalCalculated}
      />
     )}
     <Snackbar
      style={{
       backgroundColor: globalStyles.palette.accent.red[100],
       zIndex: 1,
      }}
      duration={3000}
      visible={visible}
      onDismiss={onDismissSnackBar}>
      <Text>El abono inicial</Text> no puede superar al monto total
     </Snackbar>
     <View style={styles.buttonContainer}>
      <Pressable
       android_ripple={{ color: '#fff' }}
       style={[
        styles.button,
        {
         backgroundColor: validation
          ? globalStyles.palette.primary[100]
          : 'white',
        },
       ]}
       onPress={onSubmit}>
       <Text style={styles.textButton}>Aceptar</Text>
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
 KeyboardAwareStyle: {
  flexGrow: 1,
  justifyContent: 'space-between',
 },
 stepContainer: {
  paddingVertical: 16,
 },
 intervalContainer: {
  borderTopColor: '#e6e6e6',
  borderTopWidth: 1,
  paddingTop: 20,
 },
 interval: {
  fontWeight: 'bold',
 },
 firstPay: {
  fontWeight: 'bold',
  paddingTop: 20,
  borderTopWidth: 1,
  borderTopColor: '#e6e6e6',
 },
 cuotasContainer: {
  flex: 0.3,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderBottomColor: '#e6e6e6',
  borderBottomWidth: 1,
  paddingBottom: 20,
 },
 firstPayInput: {
  fontSize: 30,
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

 buttonContainer: {
  flex: 0.5,
  justifyContent: 'flex-end',
 },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
  marginBottom: 8,
  borderColor: '#e7e7e8',
  borderWidth: 1,
 },

 textButton: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: '#e7e7e8',
 },
});
