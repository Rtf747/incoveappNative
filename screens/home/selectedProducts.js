import { View, StyleSheet } from 'react-native';
import useSelectedProducts from '../../hooks/useSelectedProducts/useSelectedProducts';
import ProductListComponent from '../../components/selectedProducts/productListComponent';
import ButtonComponent from '../../components/selectedProducts/buttonComponent';
import SnackbarComponent from '../../components/selectedProducts/snackbarComponent';

export default function SelectedProducts({ navigation }) {
 const { cart, onDismissSnackBar, totalAmount, deleteModalVisible } =
  useSelectedProducts(navigation);

 return (
  <View style={styles.container}>
   <ProductListComponent cart={cart} navigation={navigation} />
   <ButtonComponent navigation={navigation} totalAmount={totalAmount} />
   <SnackbarComponent
    deleteModalVisible={deleteModalVisible}
    onDismissSnackBar={onDismissSnackBar}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
 },
});
