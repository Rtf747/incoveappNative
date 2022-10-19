import { useSelector, useDispatch } from 'react-redux';
import {
 clearCart,
 toggleDeleteModal,
} from '../../features/inventory/inventorySlice';

export default function useSelectedProducts(navigation) {
 const cart = useSelector((state) => state.inventory.cart);
 const deleteModalVisible = useSelector(
  (state) => state.inventory.deleteModalVisible
 );

 const dispatch = useDispatch();

 const onDismissSnackBar = () => dispatch(toggleDeleteModal());

 const totalAmount = cart
  .map((product) => product.quantity * product.productPrice)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

 if (cart.length === 0) {
  navigation.navigate('NewSaleScreen');
 }

 if (deleteModalVisible) {
  setTimeout(() => {
   navigation.navigate('NewSaleScreen');
   dispatch(toggleDeleteModal());
   dispatch(clearCart());
  }, 1500);
 }

 return {
  cart,
  onDismissSnackBar,
  totalAmount,
  deleteModalVisible,
 };
}
