import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function DetailScreen({ route }) {
 const {
  id,
  clientName,
  cedula,
  address,
  date,
  time,
  amount,
  image,
  productColor,
 } = route.params;
 return (
  <View style={styles.container}>
   <View style={styles.imageContainer}>
    <Image style={styles.image} source={image} />
   </View>
   <View style={styles.productDescription}>
    <Text
     style={[
      globalStyles.typography.regular[4],
      {
       textAlign: 'center',
      },
     ]}>
     Licuadora 1.5L 550W Vaso de Vidrio
    </Text>
   </View>
   <View style={styles.productDescriptionBottom}>
    <Text style={styles.productDescriptionBottomText}>
     {clientName} | {productColor} | ID:{id}
    </Text>
   </View>
   <View style={styles.orderInfoTitle}>
    <Text style={globalStyles.typography.regular[3]}>
     Información de la orden
    </Text>
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
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
  paddingHorizontal: 24,
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
  paddingVertical: 16,
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
