import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabIcons({ name, color, size, route }) {
 if (
  route.name === 'Inicio' ||
  route.name === 'Inventario' ||
  route.name === 'Bodega'
 ) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
 }
 return <MaterialIcons name={name} size={size} color={color} />;
}
