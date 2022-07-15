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
   <View style={styles.descriptionContainer}>
    <Text style={styles.leftContainer}>12 cuotas</Text>
    <NumberFormat
     value={productPrice / 12}
     displayType='text'
     thousandSeparator='.'
     decimalSeparator=','
     decimalScale={2}
     fixedDecimalScale={true}
     prefix='$'
     renderText={(value) => <Text style={styles.rightContainer}>{value}</Text>}
    />
   </View>
   <View style={styles.descriptionContainer}>
    <Text style={styles.leftContainer}>Abono inicial</Text>
    <NumberFormat
     value={0}
     displayType='text'
     thousandSeparator='.'
     decimalSeparator=','
     decimalScale={2}
     fixedDecimalScale={true}
     prefix='$'
     renderText={(value) => <Text style={styles.rightContainer}>{value}</Text>}
    />
   </View>
   <View style={styles.descriptionContainer}>
    <Text style={styles.leftContainer}>Por pagar</Text>
    <NumberFormat
     value={productPrice}
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
    <Text style={styles.rightContainer}>Ricardo Lahura</Text>
   </View>
   <View style={styles.descriptionContainer}>
    <Text style={styles.leftContainer}>Cedula</Text>
    <Text style={styles.rightContainer}>1.123.456.789</Text>
   </View>
   <View style={styles.descriptionContainer}>
    <Text style={styles.leftContainer}>Dirección</Text>
    <Text style={styles.rightContainer}>Calle 93 # 19-75 de Bogota</Text>
   </View>
   <View style={styles.descriptionContainer}>
    <Text style={styles.leftContainer}>Telefono</Text>
    <Text style={styles.rightContainer}>1-123-456-789</Text>
   </View>
   <View style={styles.descriptionContainer}>
    <Text style={styles.leftContainer}>Correo Electronico</Text>
    <Text style={styles.rightContainer}>ricardo@gmail.com</Text>
   </View>
   <View style={styles.orderInfoTitle}>
    <Text style={globalStyles.typography.regular[3]}>Datos del producto</Text>
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
  backgroundColor: 'white',
  paddingHorizontal: 24,
 },
 stepContainer: {
  flex: 1,
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

 leftContainer: {
  backgroundColor: '#f5f5f5',
  flex: 1,
 },
 rightContainer: {
  flex: 1,
  textAlign: 'right',
  backgroundColor: '#c5c5f5',
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
  justifyContent: 'flex-end',
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
