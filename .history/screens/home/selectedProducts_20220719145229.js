import {
 Text,
 View,
 Image,
 StyleSheet,
 Pressable,
 FlatList,
} from 'react-native';
import NumberFormat from 'react-number-format';
import { globalStyles } from '../../styles/global';
import { useSelector, useDispatch } from 'react-redux';
import CardComponent from '../../components/homeScreen/selectedProductCartComponent/cardComponent';
import {
 clearCart,
 toggleDeleteModal,
} from '../../features/inventory/inventorySlice';

import { Snackbar } from 'react-native-paper';

export default function SelectedProducts({ navigation }) {
 const cart = useSelector((state) => state.inventory.cart);
 const deleteModalVisible = useSelector(
  (state) => state.inventory.deleteModalVisible
 );

 const dispatch = useDispatch();

 const onDismissSnackBar = () => dispatch(toggleDeleteModal());

 const totalAmount = cart
  .map((product) => product.quantity * product.productPrice)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

 if (deleteModalVisible) {
  dispatch(clearCart);

  setTimeout(() => {
   //  navigation.navigate('NewSaleScreen');
   //dispatch(toggleDeleteModal());
   dispatch(clearCart());
  }, 1500);
 }

 return (
  <View style={styles.container}>
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
   <View style={styles.buttonContainer}>
    <Pressable
     style={styles.button}
     android_ripple={{ color: '#fff' }}
     onPress={() => navigation.navigate('addClient')}>
     <Text style={styles.textButton}>Procesar</Text>
     <NumberFormat
      value={totalAmount}
      displayType='text'
      thousandSeparator='.'
      decimalSeparator=','
      prefix='$'
      renderText={(value) => <Text style={styles.textButton}>{value}</Text>}
     />
    </Pressable>
   </View>
   <Snackbar
    style={{
     backgroundColor: globalStyles.palette.accent.red[100],
    }}
    duration={1500}
    visible={deleteModalVisible}
    onDismiss={onDismissSnackBar}>
    Carrito vaciado
   </Snackbar>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
 },

 list: {
  flex: 3,
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
  flex: 0.5,
  justifyContent: 'center',
  backgroundColor: 'white',
 },
 button: {
  marginHorizontal: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
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
