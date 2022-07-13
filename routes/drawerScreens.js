import HomeStack from './homeStack';
import InventoryStack from './inventoryStack';
import NewSaleStack from './newSaleStack';
import WarehouseStack from './warehouseStack';
import SalesStack from './salesStack';

export const screens = [
 {
  name: 'HomeStack',
  component: HomeStack,
  title: 'Inicio',
  headerShown: false,
  iconName: 'home-outline',
 },
 {
  name: 'InventoryStack',
  component: InventoryStack,
  title: 'Inventario',
  headerShown: false,
  iconName: 'chart-box-outline',
 },
 {
  name: 'NewSaleStack',
  component: NewSaleStack,
  title: 'Nueva Venta',
  headerShown: false,
  iconName: 'add',
 },
 {
  name: 'WarehouseStack',
  component: WarehouseStack,
  title: 'Bodega',
  headerShown: false,
  iconName: 'warehouse',
 },
 {
  name: 'SalesStack',
  component: SalesStack,
  title: 'Ventas',
  headerShown: false,
  iconName: 'attach-money',
 },
];
