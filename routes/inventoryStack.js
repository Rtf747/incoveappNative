import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inventory from '../screens/inventory/inventory';
import DetailScreen from '../screens/inventory/detailScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

export default function InventoryStack({ navigation }) {
 const Stack = createNativeStackNavigator();
 const open = navigation.openDrawer;

 return (
  <Stack.Navigator>
   <Stack.Screen
    name='Inventory'
    component={Inventory}
    options={{
     headerTitle: 'Inventario',
     headerTitleAlign: 'center',
     headerLeft: () => (
      <TouchableWithoutFeedback onPress={() => open()}>
       <MaterialIcons name='menu' size={24} color='black' />
      </TouchableWithoutFeedback>
     ),
    }}
   />
   <Stack.Screen name='DetailScreen' component={DetailScreen} />
  </Stack.Navigator>
 );
}
