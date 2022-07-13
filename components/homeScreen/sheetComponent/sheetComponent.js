import { StyleSheet, Text, View, TextInput } from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import { globalStyles } from '../../../styles/global';
import DatePickerComponent from './datePickerComponent';

export default function SheetComponent({ bottomSheet }) {
 return (
  <BottomSheet
   draggable={true}
   hasDraggableIcon
   sheetBackgroundColor='#fff6e6'
   ref={bottomSheet}
   height={400}>
   <View style={styles.container}>
    <View style={styles.title}>
     <Text style={globalStyles.typography.regular[4]}>Filtros</Text>
    </View>
    <DatePickerComponent />
    <Text style={[globalStyles.typography.regular[4], styles.subTitle]}>
     Localidad
    </Text>
    <TextInput style={styles.autoComplete} placeholder='San Cristóbal' />
    <Text style={[globalStyles.typography.regular[4], styles.subTitle]}>
     Precio
    </Text>
    <View style={styles.slider}>
     <TextInput
      style={[styles.input, styles.inputLeft]}
      keyboardType='numeric'
      placeholder='Mínimo'
     />
     <Text>-</Text>
     <TextInput
      style={[styles.input, styles.inputRight]}
      keyboardType='numeric'
      placeholder='Máximo'
     />
    </View>
   </View>
  </BottomSheet>
 );
}

const styles = StyleSheet.create({
 container: {
  margin: 26,
 },
 title: {
  alignItems: 'center',
 },
 subTitle: {
  marginTop: 10,
 },
 slider: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 autoComplete: {
  padding: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 12,
  backgroundColor: 'white',
 },
 input: {
  backgroundColor: 'white',
  flex: 1,
  borderWidth: 1,
  borderRadius: 12,
  borderColor: '#ccc',

  padding: 10,
 },
 inputLeft: {
  marginRight: 10,
 },
 inputRight: {
  marginLeft: 10,
 },
});
