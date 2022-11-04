import { Text, View, StyleSheet, Pressable } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useQuota from '../../hooks/useQuota/useQuota';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { selectPayMethod } from '../../features/payMethod/payMethodSlice';
import IntervalPayComponent from '../../components/payMethod/intervalPayComponent';
import FirstPayComponent from '../../components/payMethod/firstPayComponent';
import QuotaComponent from '../../components/payMethod/quotaComponent';
import SnackbarComponent from '../../components/payMethod/snackbarComponent';
import ButtonComponent from '../../components/payMethod/buttonComponent';

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
     <StepIndicatorComponent step={step} />
     <IntervalPayComponent
      payInterval={payInterval}
      setPayInterval={setPayInterval}
     />
     <FirstPayComponent handleChange={handleChange} />
     <QuotaComponent
      typeOfQuota={typeOfQuota}
      cuota={cuota}
      quotaAmount={quotaAmount}
      totalCalculated={totalCalculated}
      totalAmount={totalAmount}
      lastQuota={lastQuota}
     />
     <SnackbarComponent
      visible={visible}
      onDismissSnackBar={onDismissSnackBar}
     />
     <ButtonComponent onSubmit={onSubmit} validation={validation} />
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
});
