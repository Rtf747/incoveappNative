import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import NumberFormat from 'react-number-format';
import { RadioButton } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useQuota from '../../hooks/useQuota/useQuota';
import InaccurateQuotas from '../../components/payMethod/inaccurateQuotas';
import ExactQuotas from '../../components/payMethod/exactQuotas';

export default function PayMethod({ navigation }) {
 const [checked, setChecked] = useState('12');
 const [total, setTotal] = useState(2255000.99);
 const [lastQuota, setLastQuota] = useState('');
 const [cuota, setCuota] = useState('12');
 const [quotaAmount, setQuotaAmount] = useState('');
 const [typeOfQuota, setTypeOfQuota] = useState('exactQuotas');

 const cart = useSelector((state) => state.inventory.cart);

 const totalAmount = cart
  .map((product) => product.quantity * product.productPrice)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

 const { quotaValidator } = useQuota();

 const min = 1;
 const max = 36;

 const handleChange = (value) => {
  const newValue = Math.max(min, Math.min(max, Number(value)));
  const newValueToString = newValue.toString();
 };

 useEffect(() => {
  console.log(quotaValidator(totalAmount));
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
    {/*  <View style={styles.descriptionContainer}>
     <Text
      style={[
       styles.leftContainer,
       {
        color: 'black',
        fontWeight: 'bold',
       },
      ]}>
      Cantidad de cuotas
     </Text>
     <Text
      style={[
       styles.rightContainer,
       {
        fontWeight: 'bold',
       },
      ]}>
      Monto
     </Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>{cuota}X</Text>
     <Text style={styles.rightContainer}>
      <NumberFormat
       value={quotaAmount}
       isNumericString={true}
       displayType='text'
       thousandSeparator='.'
       decimalSeparator=','
       decimalScale={2}
       prefix='$'
       renderText={(value) => <Text> {value} </Text>}
      />
     </Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>1X</Text>
     <Text style={styles.rightContainer}>
      <NumberFormat
       value={lastQuota}
       isNumericString={true}
       displayType='text'
       thousandSeparator='.'
       decimalSeparator=','
       decimalScale={2}
       prefix='$'
       renderText={(value) => <Text> {value} </Text>}
      />
     </Text>
    </View>
    <View
     style={[
      styles.descriptionContainer,
      {
       borderTopColor: globalStyles.palette.neutral[10],
       borderTopWidth: 1,
       paddingVertical: 10,
      },
     ]}>
     <Text
      style={[
       styles.leftContainer,
       {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
       },
      ]}>
      Total
     </Text>
     <Text style={styles.rightContainer}>
      <NumberFormat
       value={totalAmount.toFixed(2)}
       isNumericString={true}
       displayType='text'
       thousandSeparator='.'
       decimalSeparator=','
       decimalScale={2}
       prefix='$'
       renderText={(value) => (
        <Text
         style={{
          fontWeight: 'bold',
          fontSize: 20,
         }}>
         {value}
        </Text>
       )}
      />
     </Text>
    </View> */}

    <View style={styles.cuotasContainer}>
     <View style={styles.radioButtonGroup}>
      <Text
       style={{
        color:
         cuota === '12'
          ? globalStyles.palette.primary[100]
          : globalStyles.palette.neutral[50],
       }}>
       Diario
      </Text>
      <RadioButton
       uncheckedColor={globalStyles.palette.neutral[50]}
       color={globalStyles.palette.primary[100]}
       value='12'
       status={cuota === '12' ? 'checked' : 'unchecked'}
       onPress={() => setCuota('12')}
      />
     </View>
     <View style={styles.radioButtonGroup}>
      <Text
       style={{
        color:
         cuota === '24'
          ? globalStyles.palette.primary[100]
          : globalStyles.palette.neutral[50],
       }}>
       Semanal
      </Text>
      <RadioButton
       uncheckedColor={globalStyles.palette.neutral[50]}
       color={globalStyles.palette.primary[100]}
       value='24'
       status={cuota === '24' ? 'checked' : 'unchecked'}
       onPress={() => setCuota('24')}
      />
     </View>
     <View style={styles.radioButtonGroup}>
      <Text
       style={{
        color:
         cuota === '36'
          ? globalStyles.palette.primary[100]
          : globalStyles.palette.neutral[50],
       }}>
       Quincenal
      </Text>
      <RadioButton
       uncheckedColor={globalStyles.palette.neutral[50]}
       color={globalStyles.palette.primary[100]}
       value='36'
       status={cuota === '36' ? 'checked' : 'unchecked'}
       onPress={() => setCuota('36')}
      />
     </View>
     <View style={styles.radioButtonGroup}>
      <Text
       style={{
        color:
         cuota === '36'
          ? globalStyles.palette.primary[100]
          : globalStyles.palette.neutral[50],
       }}>
       Mensual
      </Text>
      <RadioButton
       uncheckedColor={globalStyles.palette.neutral[50]}
       color={globalStyles.palette.primary[100]}
       value='36'
       status={cuota === '36' ? 'checked' : 'unchecked'}
       onPress={() => setCuota('36')}
      />
     </View>
    </View>
    <View style={styles.installmentContainer}>
     <Text>
      <NumberFormat
       value={total / parseInt(cuota)}
       displayType='text'
       thousandSeparator='.'
       decimalSeparator=','
       decimalScale={2}
       prefix='$'
       renderText={(value) => <Text style={styles.installment}>{value}</Text>}
      />
     </Text>
     <Text>Monto a pagar por cuota</Text>
    </View>

    <View style={styles.buttonContainer}>
     <Pressable
      android_ripple={{ color: '#fff' }}
      style={styles.buttonCash}
      onPress={() => navigation.navigate('saleSummary')}>
      <Text style={styles.textButtonCash}>Aceptar</Text>
     </Pressable>
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
});
