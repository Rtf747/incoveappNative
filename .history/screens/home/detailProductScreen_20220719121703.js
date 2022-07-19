import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../../styles/global';
import NumberFormat from 'react-number-format';

export default function DetailProductScreen({ route, navigation }) {
 const {
  id,
  productName,
  productPrice,
  productImage,
  productDescription,
  productColor,
 } = route.params;

 return (
  <View style={styles.container}>
   <Text>hi</Text>
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
  width: 200,
  height: 200,
 },
 imageContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'green',
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
  justifyContent: 'center',
 },
 button: {
  marginHorizontal: 16,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: 'red',
 },
 textButton: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
 },
 descriptionContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 8,
 },
 leftContainer: {
  color: globalStyles.palette.neutral[50],
  flex: 1,
 },
 rightContainer: {
  flex: 1,
  textAlign: 'right',
 },
});
