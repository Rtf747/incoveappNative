import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function DrawerIcons({ name, color, size, route }) {
 if (
  route.name === 'HomeStack' ||
  route.name === 'InventoryStack' ||
  route.name === 'WarehouseStack'
 ) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
 }
 return <MaterialIcons name={name} size={size} color={color} />;
}
