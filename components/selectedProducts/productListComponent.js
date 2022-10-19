import { FlatList, StyleSheet, Text, View } from 'react-native';
import CardComponent from '../homeScreen/selectedProductCartComponent/cardComponent';

export default function ProductListComponent({ cart, navigation }) {
 return (
  <View style={styles.list}>
   <FlatList
    data={cart}
    style={styles.list}
    renderItem={({ item }) => (
     <CardComponent
      item={item}
      quantity={item.quantity}
      id={item.productId}
      image={item.productImage}
      name={item.productName}
      description={item.productDescription}
      amount={item.productPrice}
      navigation={navigation}
     />
    )}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 list: {
  flex: 3,
 },
});
