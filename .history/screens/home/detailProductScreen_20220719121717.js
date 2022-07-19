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
});
