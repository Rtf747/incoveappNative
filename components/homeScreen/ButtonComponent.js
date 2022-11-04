import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';
import { Button } from 'react-native-paper';

export default function ButtonComponent({ navigation }) {
 return (
  <View style={styles.boxContainer}>
   <Button
    icon={() => <MaterialIcons name='add' size={24} color='white' />}
    mode='contained'
    color={globalStyles.palette.primary[100]}
    size={20}
    style={styles.iconBox}
    onPress={() => navigation.navigate('NewSaleScreen')}>
    Nueva Venta
   </Button>
  </View>
 );
}

const styles = StyleSheet.create({
 boxContainer: {
  position: 'absolute',
  alignItems: 'center',
  top: '91%',
  width: '100%',
  height: 48,
 },
 iconBox: {
  marginTop: 6,
  borderRadius: 12,
 },
});
