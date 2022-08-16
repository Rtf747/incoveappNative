import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import NumberFormat from 'react-number-format';
import usePayInterval from '../../hooks/usePayInterval/usePayInterval';
import InaccurateQuotas from '../../components/payMethod/inaccurateQuotas';
import ExactQuotas from '../../components/payMethod/exactQuotas';

export default function SaleSummary({ navigation }) {
 const cart = useSelector((state) => state.inventory.cart);

 const totalAmount = cart
  .map((product) => product.quantity * product.productPrice)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

 const payMethod = useSelector((state) => state.payMethod);
 const products = useSelector((state) => state.inventory.products);
 const client = useSelector((state) => state.clientData.selectedClient);

 console.log(payMethod);
 const {
  typeOfQuota,
  initialPay,
  lastQuota,
  numberOfPayments,
  payInterval,
  quotaAmount,
  totalCalculated,
 } = payMethod;

 const {
  name,
  lastName,
  documentType,
  cedula,
  department,
  city,
  address,
  phone,
  email,
 } = client;

 const product = products.find((product) => product.productId === 5);
 const {
  productId,
  productName,
  productPrice,
  productImage,
  productDescription,
  productColor,
 } = product;

 const step = 2;

 const { interval } = usePayInterval();

 return (
  <ScrollView style={styles.container}>
   <View style={styles.stepContainer}>
    <StepIndicatorComponent step={step} />
   </View>
   <View style={styles.productPriceContainer}>
    <NumberFormat
     value={totalAmount}
     displayType='text'
     thousandSeparator='.'
     decimalSeparator=','
     decimalScale={2}
     fixedDecimalScale={true}
     prefix='$'
     renderText={(value) => (
      <Text style={globalStyles.typography.extraBold[1]}>{value}</Text>
     )}
    />
    <Text style={styles.totalLabel}>Valor total de la venta</Text>
   </View>
   <View style={styles.detailsContainer}>
    <View style={styles.orderInfoTitle}>
     <Text style={globalStyles.typography.regular[3]}>Método de pago</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Intervalo de pagos</Text>
     <Text> {interval(payInterval)}</Text>
    </View>

    {typeOfQuota === 'exactQuotas' ? (
     <View style={styles.descriptionContainer}>
      <Text style={styles.leftContainer}>{numberOfPayments} cuotas</Text>
      <NumberFormat
       value={quotaAmount}
       isNumericString={true}
       displayType='text'
       thousandSeparator='.'
       decimalSeparator=','
       decimalScale={2}
       prefix='$'
       renderText={(value) => (
        <Text style={styles.rightContainer}>{value}</Text>
       )}
      />
     </View>
    ) : (
     <>
      {numberOfPayments <= 0 ? null : (
       <View style={styles.descriptionContainer}>
        <Text style={styles.leftContainer}>{numberOfPayments} cuotas</Text>
        <NumberFormat
         value={quotaAmount}
         isNumericString={true}
         displayType='text'
         thousandSeparator='.'
         decimalSeparator=','
         decimalScale={2}
         prefix='$'
         renderText={(value) => (
          <Text style={styles.rightContainer}>{value}</Text>
         )}
        />
       </View>
      )}
      <View style={styles.descriptionContainer}>
       <Text style={styles.leftContainer}>1 cuota</Text>
       <NumberFormat
        value={lastQuota}
        isNumericString={true}
        displayType='text'
        thousandSeparator='.'
        decimalSeparator=','
        decimalScale={2}
        prefix='$'
        renderText={(value) => (
         <Text style={styles.rightContainer}>{value}</Text>
        )}
       />
      </View>
     </>
    )}

    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Abono inicial</Text>
     <Text>{initialPay}</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Por pagar</Text>
     <NumberFormat
      value={totalCalculated}
      displayType='text'
      thousandSeparator='.'
      decimalSeparator=','
      decimalScale={2}
      fixedDecimalScale={true}
      prefix='$'
      renderText={(value) => <Text style={styles.rightContainer}>{value}</Text>}
     />
    </View>
    <View style={styles.orderInfoTitle}>
     <Text style={globalStyles.typography.regular[3]}>Datos del cliente</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Nombre</Text>
     <Text style={styles.rightContainer}>{`${lastName} ${name}`}</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>{documentType}</Text>
     <NumberFormat
      value={cedula}
      thousandSeparator='.'
      decimalSeparator=','
      displayType='text'
      renderText={(value) => <Text style={styles.rightContainer}>{value}</Text>}
     />
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Dirección</Text>
     <Text
      style={
       styles.rightContainer
      }>{`${address}, ${city}, ${department}`}</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Telefono</Text>
     <NumberFormat
      value={phone}
      thousandSeparator='-'
      decimalSeparator=','
      displayType='text'
      renderText={(value) => <Text style={styles.rightContainer}>{value}</Text>}
     />
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Correo Electronico</Text>
     <Text style={styles.rightContainer}>{email}</Text>
    </View>
    <View style={styles.orderInfoTitle}>
     <Text style={globalStyles.typography.regular[3]}>
      Detalles del producto
     </Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Marca</Text>
     <Text style={styles.rightContainer}>OSTER</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Descripcion</Text>
     <Text style={styles.rightContainer}>
      Freidora de aire de 5.5 Litros CKSTAF55
     </Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Color</Text>
     <Text style={styles.rightContainer}>Negro</Text>
    </View>
   </View>
   <View style={styles.buttonContainer}>
    <Pressable
     style={styles.buttonCash}
     android_ripple={{ color: '#fff' }}
     onPress={() => navigation.navigate('Home')}>
     <Text style={styles.textButtonCash}>Aceptar y guardar</Text>
    </Pressable>
   </View>
  </ScrollView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingHorizontal: 24,
  backgroundColor: '#fff',
 },
 stepContainer: {
  flex: 1,
  paddingVertical: 16,
 },
 productPriceContainer: {
  flex: 1,
  alignItems: 'center',
 },
 productPrice: {
  fontSize: 24,
  fontWeight: 'bold',
  letterSpacing: 1,
 },
 detailsContainer: {
  flex: 1,
 },
 totalLabel: {
  color: globalStyles.palette.neutral[60],
 },
 leftContainer: {
  color: globalStyles.palette.neutral[50],
  flex: 1,
 },
 rightContainer: {
  flex: 1,
  textAlign: 'right',
 },
 productDescription: {
  marginTop: 26,
  paddingHorizontal: 36,
 },
 productDescriptionBottom: {
  paddingVertical: 8,
 },
 productDescriptionBottomText: [
  globalStyles.typography.regular[6],
  {
   color: globalStyles.palette.neutral[60],
   textAlign: 'center',
  },
 ],
 orderInfoTitle: {
  flex: 1,
  paddingVertical: 8,
 },
 descriptionContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 8,
 },
 subTitle: [
  globalStyles.typography.regular[6],
  {
   color: globalStyles.palette.neutral[60],
   paddingVertical: 8,
  },
 ],
 buttonContainer: {
  flex: 1,
  marginTop: 24,
 },
 buttonCash: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
  marginVertical: 8,
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
