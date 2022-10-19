import { StyleSheet, Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { globalStyles } from '../../styles/global';

export default function SnackbarComponent({
 deleteModalVisible,
 onDismissSnackBar,
}) {
 return (
  <Snackbar
   style={styles.snackbar}
   duration={1500}
   visible={deleteModalVisible}
   onDismiss={onDismissSnackBar}>
   Carrito vaciado
  </Snackbar>
 );
}

const styles = StyleSheet.create({
 snackbar: {
  backgroundColor: globalStyles.palette.accent.red[100],
 },
});
