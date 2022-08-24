import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/homeScreen';
import SubCathegory from '../screens/home/subCathegory';
import DetailScreen from '../screens/home/detailScreen';
import DetailProductScreen from '../screens/home/detailProductScreen';
import NewSaleScreen from '../screens/home/newSaleScreen';
import SelectProduct from '../screens/home/selectProduct';
import AddClient from '../screens/home/addClient';
import PayMethod from '../screens/home/payMethod';
import SaleSummary from '../screens/home/saleSummary';
import SelectedProducts from '../screens/home/selectedProducts';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global';
import { Pressable } from 'react-native';
import { toggleDeleteModal } from '../features/inventory/inventorySlice';
import { searchSale, toggleSearch } from '../features/sales/salesSlice';
import { toggleSearch as productToggleSearch } from '../features/inventory/inventorySlice';
import { toggleSearch as clientToggleSearch } from '../features/clientData/clientSlice';
import { searchProduct } from '../features/inventory/inventorySlice';
import { searchClient } from '../features/clientData/clientSlice';
import { useSelector, useDispatch } from 'react-redux';
import SelectClient from '../screens/home/selectClient';
import DetailClient from '../screens/home/detailClient';

export default function HomeStack({ navigation }) {
 const saleSearchVisible = useSelector((state) => state.sales.searchVisible);
 const productSearchVisible = useSelector(
  (state) => state.inventory.searchVisible
 );
 const clientSearchVisible = useSelector(
  (state) => state.clientData.searchVisible
 );

 const dispatch = useDispatch();

 const Stack = createNativeStackNavigator();
 const openDrawer = navigation.openDrawer;

 const selectProductTitle = () => {
  if (productSearchVisible) {
   return () => (
    <TextInput
     style={{
      width: 250,
      borderWidth: 1,
      borderRadius: 15,
      textAlign: 'center',
     }}
     selectionColor={globalStyles.palette.primary[100]}
     placeholder='Buscar...'
     returnKeyType='search'
     textContentType='none'
     cancelButtonTitle='Cancel'
     onChangeText={(value) => dispatch(searchProduct(value))}
    />
   );
  }

  return 'Productos';
 };

 const homeHeaderTitle = () => {
  if (saleSearchVisible) {
   return () => (
    <TextInput
     style={{
      width: 250,
      borderWidth: 1,
      borderRadius: 15,
      textAlign: 'center',
     }}
     selectionColor={globalStyles.palette.primary[100]}
     placeholder='Buscar...'
     returnKeyType='search'
     textContentType='none'
     cancelButtonTitle='Cancel'
     onChangeText={(value) => dispatch(searchSale(value))}
    />
   );
  }

  return 'Últimas ventas';
 };

 const selectClientHeaderTitle = () => {
  if (clientSearchVisible) {
   return () => (
    <TextInput
     style={{
      width: 250,
      borderWidth: 1,
      borderRadius: 15,
      textAlign: 'center',
     }}
     selectionColor={globalStyles.palette.primary[100]}
     placeholder='Buscar...'
     returnKeyType='search'
     textContentType='none'
     cancelButtonTitle='Cancel'
     onChangeText={(value) => dispatch(searchClient(value))}
    />
   );
  }

  return 'Lista de clientes';
 };

 const onPress = () => {
  dispatch(toggleDeleteModal());
 };

 return (
  <Stack.Navigator>
   <Stack.Screen
    name='Home'
    component={HomeScreen}
    options={{
     headerTitle: homeHeaderTitle(),
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
     headerLeft: () => (
      <Pressable onPress={() => openDrawer()}>
       <MaterialIcons
        name='menu'
        size={24}
        color='black'
        style={{
         marginLeft: 10,
        }}
       />
      </Pressable>
     ),
     headerRight: () => (
      <Pressable onPress={() => dispatch(toggleSearch())}>
       <MaterialIcons
        name='search'
        size={24}
        color='black'
        style={{
         marginRight: 10,
        }}
       />
      </Pressable>
     ),
    }}
   />
   <Stack.Screen
    name='SelectClient'
    component={SelectClient}
    options={{
     headerTitle: selectClientHeaderTitle(),
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
     headerRight: () => (
      <Pressable onPress={() => dispatch(clientToggleSearch())}>
       <MaterialIcons name='search' size={24} color='black' />
      </Pressable>
     ),
    }}
   />
   <Stack.Screen
    name='SubCathegory'
    component={SubCathegory}
    options={{
     headerTitle: 'Subcategoria',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
    }}
   />
   <Stack.Screen
    name='DetailScreen'
    component={DetailScreen}
    options={{
     headerTitle: 'Detalle de la venta',
     headerTitleAlign: 'center',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerShadowVisible: false,
    }}
   />
   <Stack.Screen
    name='DetailClient'
    component={DetailClient}
    options={{
     headerTitle: 'Datos del cliente',
     headerTitleAlign: 'center',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerShadowVisible: false,
    }}
   />
   <Stack.Screen
    name='SelectedProducts'
    component={SelectedProducts}
    options={{
     headerTitle: 'Carrito',
     headerTitleAlign: 'center',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerShadowVisible: false,
     headerRight: () => (
      <Pressable android_ripple={{ color: '#fff' }} onPress={onPress}>
       <MaterialIcons name='delete-outline' size={24} color='black' />
      </Pressable>
     ),
    }}
   />
   <Stack.Screen
    name='DetailProductScreen'
    component={DetailProductScreen}
    options={{
     headerTitle: 'Detalle del producto',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
     headerRight: () => (
      <TouchableWithoutFeedback>
       <MaterialCommunityIcons name='dots-horizontal' size={24} color='black' />
      </TouchableWithoutFeedback>
     ),
    }}
   />
   <Stack.Screen
    name='NewSaleScreen'
    component={NewSaleScreen}
    options={{
     headerTitle: 'Categorias',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
    }}
   />
   <Stack.Screen
    name='SelectProduct'
    component={SelectProduct}
    options={{
     headerTitle: selectProductTitle(),
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
     headerRight: () => (
      <Pressable onPress={() => dispatch(productToggleSearch())}>
       <MaterialIcons
        name='search'
        size={24}
        color='black'
        style={{
         marginRight: 10,
        }}
       />
      </Pressable>
     ),
    }}
   />
   <Stack.Screen
    name='payMethod'
    component={PayMethod}
    options={{
     headerTitle: 'Metodo de pago',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
    }}
   />
   <Stack.Screen
    name='addClient'
    component={AddClient}
    options={{
     headerTitle: 'Datos del cliente',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
     headerRight: () => (
      <TouchableWithoutFeedback
       onPress={() => navigation.navigate('SelectClient')}>
       <MaterialIcons
        name='search'
        size={24}
        color='black'
        style={{
         marginRight: 10,
        }}
       />
      </TouchableWithoutFeedback>
     ),
    }}
   />
   <Stack.Screen
    name='saleSummary'
    component={SaleSummary}
    options={{
     headerTitle: 'Resumen de la venta',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
    }}
   />
  </Stack.Navigator>
 );
}
