import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useSelector, useDispatch } from 'react-redux';
import CardComponent from '../../components/inventory/cardComponent/cardComponent';
import { MaterialIcons } from '@expo/vector-icons';
import { IconButton, Badge } from 'react-native-paper';
import { filterProducts } from '../../features/inventory/inventorySlice';
import { useEffect, useState } from 'react';
import { Button, Snackbar } from 'react-native-paper';

export default function SelectProduct({ route, navigation }) {
 const [visible, setVisible] = useState(false);
 const [total, setTotal] = useState(0);

 const onToggleSnackBar = () => setVisible(!visible);
 const onDismissSnackBar = () => setVisible(false);

 const { descripcion } = route.params;
 const cathegoryName = descripcion;

 const categorizedProducts = useSelector(
  (state) => state.inventory.categorizedProducts
 );

 const cart = useSelector((state) => state.inventory.cart);

 const dispatch = useDispatch();

 console.log(cart.reduce((a, b) => a + b, 0));

 useEffect(() => {
  dispatch(filterProducts(cathegoryName));
 }, []);

 return (
  <>
   <View style={styles.title}>
    <Text style={globalStyles.typography.regular[4]}>{cathegoryName}</Text>
   </View>
   <View style={styles.container}>
    <FlatList
     data={categorizedProducts}
     style={styles.list}
     renderItem={({ item }) => (
      <CardComponent
       item={item}
       id={item.productId}
       image={item.productImage}
       name={item.productName}
       description={item.productDescription}
       amount={item.productPrice}
       navigation={navigation}
       onToggleSnackBar={onToggleSnackBar}
      />
     )}
    />
   </View>
   <View style={styles.boxContainer}>
    <View style={styles.box}>
     <Badge
      visible={cart.length ? true : false}
      style={{
       backgroundColor: globalStyles.palette.primary[100],
       position: 'absolute',
       top: 0,
       right: 0,
       zIndex: 1,
      }}>
      {cart.length}
     </Badge>
     <IconButton
      type='outlined'
      icon={() => (
       <MaterialIcons name='add-shopping-cart' size={24} color='black' />
      )}
      color={globalStyles.palette.primary[100]}
      size={20}
      style={styles.iconBox}
      onPress={() => navigation.navigate('NewSaleScreen')}
     />
    </View>
    <Snackbar
     style={{
      backgroundColor: globalStyles.palette.primary[100],
     }}
     duration={2000}
     visible={visible}
     onDismiss={onDismissSnackBar}
     action={{
      label: 'Entendido',
      onPress: () => {
       // Do something
      },
     }}>
     Producto Agregado
    </Snackbar>
   </View>
  </>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: globalStyles.palette.neutral[0],
 },
 title: {
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: globalStyles.palette.neutral[0],
  paddingLeft: 24,
 },
 boxContainer: {
  position: 'absolute',
  alignItems: 'center',
  top: '91%',
  width: '100%',
  height: 48,
 },
 box: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 62,
  height: 48,
  borderRadius: 20,
  backgroundColor: '#E7E7E8',
 },
 iconBox: {
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 4,
  width: 36,
  height: 36,
  borderRadius: 12,
  backgroundColor: 'white',
 },
});
