import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
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
  <View style={styles.container}>
   <View style={styles.stepContainer}>
    <StepIndicatorComponent step={step} />
   </View>
   <View style={styles.productPriceContainer}>
    <NumberFormat
     value={productPrice}
     displayType='text'
     thousandSeparator='.'
     decimalSeparator=','
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
   <View>
    <Text>12 cuotas </Text>
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
   <View>
    <Text style={styles.subTitle}>Dirección</Text>
   </View>
   <View>
    <Text>Jr. los fresnos 1555. La molina. Lima, Perú</Text>
   </View>
   <View>
    <Text style={styles.subTitle}>Cliente</Text>
   </View>
   <View>
    <Text>Ricardo Lahura</Text>
   </View>
   <View style={styles.buttonContainer}>
    <Pressable
     style={styles.buttonCash}
     onPress={() => navigation.navigate('Home')}>
     <Text style={styles.textButtonCash}>Aceptar y guardar</Text>
    </Pressable>
   </View>
  </View>
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
 subTitle: [
  globalStyles.typography.regular[6],
  {
   color: globalStyles.palette.neutral[60],
   paddingVertical: 8,
  },
 ],
 buttonContainer: {
  marginVertical: 16,
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
