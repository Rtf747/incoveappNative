import { Snackbar } from 'react-native-paper';

export default function SnackbarComponent({ visible, onDismissSnackBar }) {
 return (
  <Snackbar
   duration={2000}
   style={{
    backgroundColor: 'red',
   }}
   visible={visible}
   onDismiss={onDismissSnackBar}>
   Complete todos los campos
  </Snackbar>
 );
}
