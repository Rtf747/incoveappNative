import {
 Text,
 View,
 Image,
 StyleSheet,
 Pressable,
 ScrollView,
} from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { useSelector } from 'react-redux';
import { globalStyles } from '../../styles/global';
import NumberFormat from 'react-number-format';

export default function SaleSummary({ navigation }) {
 const products = useSelector((state) => state.inventory);

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

 return (
  <ScrollView style={styles.container}>
   <View style={styles.stepContainer}>
    <StepIndicatorComponent step={step} />
   </View>
   <View style={styles.productPriceContainer}>
    <NumberFormat
     value={productPrice}
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
    <Text>Valor total del producto</Text>
   </View>

   <View style={styles.orderInfoTitle}>
    <Text style={globalStyles.typography.regular[3]}>Método de pago</Text>
   </View>
   <View style={styles.installments}>
    <Text>12 cuotas</Text>
    <NumberFormat
     value={productPrice / 12}
     displayType='text'
     thousandSeparator='.'
     decimalSeparator=','
     decimalScale={2}
     fixedDecimalScale={true}
     prefix='$'
     renderText={(value) => <Text>{value}</Text>}
    />
   </View>
   <View style={styles.installments}>
    <Text>Abono inicial</Text>
    <NumberFormat
     value={0}
     displayType='text'
     thousandSeparator='.'
     decimalSeparator=','
     decimalScale={2}
     fixedDecimalScale={true}
     prefix='$'
     renderText={(value) => <Text>{value}</Text>}
    />
   </View>
   <View style={styles.installments}>
    <Text>Por pagar</Text>
    <NumberFormat
     value={productPrice}
     displayType='text'
     thousandSeparator='.'
     decimalSeparator=','
     decimalScale={2}
     fixedDecimalScale={true}
     prefix='$'
     renderText={(value) => <Text>{value}</Text>}
    />
   </View>

   <View style={styles.orderInfoTitle}>
    <Text style={globalStyles.typography.regular[3]}>Datos del cliente</Text>
   </View>
   <View style={styles.installments}>
    <Text>Nombre</Text>
    <Text>Ricardo Lahura</Text>
   </View>
   <View style={styles.installments}>
    <Text>Cedula</Text>
    <Text>1.123.456.789</Text>
   </View>
   <View style={styles.installments}>
    <Text>Dirección</Text>
    <Text>Calle 93 # 19-75 de Bogota</Text>
   </View>
   <View style={styles.installments}>
    <Text>Telefono</Text>
    <Text>1-123-456-789</Text>
   </View>
   <View style={styles.installments}>
    <Text>Correo Electronico</Text>
    <Text>ricardo@gmail.com</Text>
   </View>
   <View style={styles.orderInfoTitle}>
    <Text style={globalStyles.typography.regular[3]}>Datos del producto</Text>
   </View>
   <View style={styles.installments}>
    <Text>Marca</Text>
    <Text>OSTER</Text>
   </View>
   <View style={styles.installments}>
    <Text>Descripcion</Text>
    <Text>Freidora de aire de 5.5 Litros CKSTAF55</Text>
   </View>
   <View style={styles.installments}>
    <Text>Color</Text>
    <Text>Negro</Text>
   </View>

   <View style={styles.buttonContainer}>
    <Pressable
     style={styles.buttonCash}
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
  backgroundColor: 'green',
  paddingHorizontal: 24,
 },
 stepContainer: {
  paddingVertical: 16,
 },
 productPriceContainer: {
  alignItems: 'center',
 },
 productPrice: {
  fontSize: 24,
  fontWeight: 'bold',
  letterSpacing: 1,
 },
 image: {
  width: 100,
  height: 100,
 },
 imageContainer: {
  paddingTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
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
  paddingVertical: 8,
 },
 installments: {
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
  flex: 2,
  justifyContent: 'flex-end',
  backgroundColor: 'red',
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
