import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/homeScreen';
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
import { TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global';
export default function HomeStack({ navigation }) {
 const Stack = createNativeStackNavigator();
 const openDrawer = navigation.openDrawer;

 return (
  <Stack.Navigator>
   <Stack.Screen
    name='Home'
    component={HomeScreen}
    options={{
     headerTitle: 'Inicio',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
     headerLeft: () => (
      <TouchableWithoutFeedback onPress={() => openDrawer()}>
       <MaterialIcons
        name='menu'
        size={24}
        color='black'
        style={{
         marginLeft: 10,
        }}
       />
      </TouchableWithoutFeedback>
     ),
     headerRight: () => (
      <TouchableWithoutFeedback>
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
    name='DetailProductScreen'
    component={DetailProductScreen}
    options={{
     headerTitle: 'Producto',
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
     headerRight: () => (
      <TouchableWithoutFeedback>
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
    name='SelectProduct'
    component={SelectProduct}
    options={{
     headerTitle: 'Productos',
     headerTitleStyle: globalStyles.typography.semiBold[3],
     headerTitleAlign: 'center',
     headerShadowVisible: false,
     headerRight: () => (
      <TouchableWithoutFeedback>
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
      <TouchableWithoutFeedback>
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
