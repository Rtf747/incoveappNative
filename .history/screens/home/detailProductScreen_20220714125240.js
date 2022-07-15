import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../../styles/global';
import NumberFormat from 'react-number-format';

export default function DetailProductScreen({ route, navigation }) {
 const { id, name, price, image, description, category } = route.params;

 return (
  <View style={styles.container}>
   <View style={styles.imageContainer}>
    <Image style={styles.image} source={image} />
   </View>
   <View style={styles.dividerContainer}>
    <View style={styles.divider} />
   </View>
   <View style={styles.bottomContainer}>
    <View style={styles.textContainer}>
     <Text style={globalStyles.typography.regular[4]}>{name} - </Text>
     <Text style={globalStyles.typography.regular[4]}>{description}</Text>
    </View>
    <View style={styles.brandImageContainer}>
     <Image style={styles.brandImage} source={image} />
    </View>
   </View>
   <NumberFormat
    value={price}
    displayType='text'
    thousandSeparator='.'
    decimalSeparator=','
    prefix='$'
    renderText={(value) => <Text style={styles.price}>{value}</Text>}
   />
   <View style={styles.buttonContainer}>
    <Pressable
     style={styles.button}
     onPress={() => navigation.navigate('addClient')}>
     <Text style={styles.textButton}>Agregar producto</Text>
    </Pressable>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
 },
 image: {
  width: 350,
  height: 350,
 },
 imageContainer: {
  flex: 4,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  marginHorizontal: '5%',
 },
 dividerContainer: {
  padding: 16,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
 },
 divider: {
  height: 4,
  width: 132,
  borderRadius: 10,
  backgroundColor: '#e7e7e8',
 },
 bottomContainer: {
  flex: 1,
  paddingTop: 20,
  flexDirection: 'row',
  paddingHorizontal: 16,
  textAlign: 'center',
  justifyContent: 'center',
  marginHorizontal: 25,
  backgroundColor: 'white',
 },
 textContainer: {
  width: '100%',
  justifyContent: 'center',
 },
 brandImageContainer: {
  alignItems: 'center',
  justifyContent: 'center',
 },
 brandImage: {
  borderRadius: 24,
  borderWidth: 2,
  borderColor: '#e7e7e8',
  width: 48,
  height: 48,
 },
 price: {
  paddingHorizontal: 18,
  fontSize: 20,
  fontWeight: 'bold',
 },
 buttonContainer: {
  flex: 1,
  paddingTop: 16,
  backgroundColor: 'red',
 },
 button: {
  marginHorizontal: 16,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
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
