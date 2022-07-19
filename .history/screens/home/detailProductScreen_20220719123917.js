import {
 Text,
 View,
 Image,
 StyleSheet,
 Pressable,
 ScrollView,
} from 'react-native';
import { globalStyles } from '../../styles/global';
import NumberFormat from 'react-number-format';

export default function DetailProductScreen({ route, navigation }) {
 const {
  productId,
  productName,
  productPrice,
  productImage,
  productDescription,
  productColor,
  quantity,
 } = route.params;

 return (
  <ScrollView style={styles.container}>
   <View style={styles.imageContainer}>
    <Image source={productImage} style={styles.image} />
   </View>
   <View style={styles.detailsContainer}>
    <View style={styles.orderInfoTitle}>
     <Text style={globalStyles.typography.regular[3]}>Datos del producto</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Marca</Text>
     <Text style={styles.rightContainer}>{productName}</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Descripcion</Text>
     <Text style={styles.rightContainer}>{productDescription}</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Color</Text>
     <Text style={styles.rightContainer}>{productColor}</Text>
    </View>

    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Precio Unitario</Text>

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
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Cantidad</Text>
     <Text style={styles.rightContainer}>{quantity}</Text>
    </View>
   </View>
   <View style={styles.buttonContainer}>
    <Pressable
     style={styles.button}
     android_ripple={{ color: '#fff' }}
     onPress={() => navigation.navigate('Home')}>
     <Text style={styles.textButton}>Aceptar y guardar</Text>
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
 imageContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
 image: {
  width: 300,
  height: 300,
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
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
  marginVertical: 8,
 },
 textButton: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
 },
});
