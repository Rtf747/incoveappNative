import { useSelector, useDispatch } from 'react-redux';

export default function useSelectProduct(
 route,
 navigation,
 visible,
 setVisible,
 error
) {
 const { descripcion } = route.params;
 const subCathegoryName = descripcion;
 const subCathegoryId = route.params.id;

 const cart = useSelector((state) => state.inventory.cart);

 const onToggleSnackBar = () => {
  setVisible(!visible);
  setError(false);
 };
 const onDismissSnackBar = () => setVisible(false);

 const onToggleError = () => setError(!error);
 const onDismissError = () => setError(false);

 const dispatch = useDispatch();

 const initialValue = 0;
 const total = cart
  .map((product) => product.quantity)
  .reduce(
   (previousValue, currentValue) => previousValue + currentValue,
   initialValue
  );

 const onSubmit = () => {
  if (total) {
   navigation.navigate('SelectedProducts');
  } else {
   onToggleError();
  }
 };

 return {
  subCathegoryId,
  subCathegoryName,
  dispatch,
  onToggleSnackBar,
  onDismissSnackBar,
  onDismissError,
  onSubmit,
  cart,
  total,
 };
}
