import { Text } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { globalStyles } from '../../styles/global';

export default function SnackbarComponent({ visible, onDismissSnackBar }) {
 return (
  <Snackbar
   style={{
    backgroundColor: globalStyles.palette.accent.red[100],
    zIndex: 1,
   }}
   duration={3000}
   visible={visible}
   onDismiss={onDismissSnackBar}>
   <Text>El abono inicial</Text> no puede superar al monto total
  </Snackbar>
 );
}
