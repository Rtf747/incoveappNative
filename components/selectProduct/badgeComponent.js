import { StyleSheet, Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { IconButton, Badge } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';

const BadgeComponent = ({
 cart,
 error,
 total,
 onDismissSnackBar,
 onDismissError,
 onSubmit,
 visible,
}) => {
 return (
  <View style={styles.boxContainer}>
   <View style={styles.box}>
    <Badge
     visible={cart.length ? true : false}
     style={{
      backgroundColor: globalStyles.palette.primary[100],
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1,
     }}>
     {total}
    </Badge>
    <IconButton
     type='outlined'
     icon={() => (
      <MaterialIcons name='add-shopping-cart' size={24} color='black' />
     )}
     color={globalStyles.palette.primary[100]}
     size={20}
     style={styles.iconBox}
     onPress={onSubmit}
    />
   </View>
   <Snackbar
    style={{
     backgroundColor: globalStyles.palette.primary[100],
    }}
    duration={1500}
    visible={visible}
    onDismiss={onDismissSnackBar}
    action={{
     label: 'Entendido',
     onPress: () => {},
    }}>
    Producto Agregado
   </Snackbar>
   <Snackbar
    style={{
     backgroundColor: 'red',
    }}
    duration={1500}
    visible={error}
    onDismiss={onDismissError}>
    Debe agregar al menos un producto
   </Snackbar>
  </View>
 );
};

export default BadgeComponent;

const styles = StyleSheet.create({
 box: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 62,
  height: 48,
  borderRadius: 20,
  backgroundColor: '#E7E7E8',
 },
 iconBox: {
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 4,
  width: 36,
  height: 36,
  borderRadius: 12,
  backgroundColor: 'white',
 },
 boxContainer: {
  position: 'absolute',
  alignItems: 'center',
  top: '91%',
  width: '100%',
  height: 48,
 },
});
