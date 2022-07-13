import { globalStyles } from '../../../styles/global';
import { addDays, subDays, format, startOfToday } from 'date-fns';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { IconButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { es } from 'date-fns/locale';
import DateTimePicker from '@react-native-community/datetimepicker';

const typeOfDate = ['Diario', 'Semanal', 'Mensual', 'Anual'];

export default function DatePickerComponent() {
 const [day, setDay] = useState(startOfToday());
 const [date, setDate] = useState(startOfToday());
 const [mode, setMode] = useState('date');
 const [show, setShow] = useState(false);

 const onChange = (event, selectedDate) => {
  const currentDate = selectedDate;
  setShow(false);
  setDay(currentDate);
 };

 const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
 };

 const showDatepicker = () => {
  showMode('date');
 };

 const diaSeleccionado = (action) => {
  if (action === 'sub') {
   setDay(subDays(day, 1));
  } else if (action === 'add') {
   setDay(addDays(day, 1));
  }
 };

 return (
  <>
   <View style={styles.typeOfDay}>
    {typeOfDate.map((el) => (
     <View style={styles.dayContainer} key={el}>
      <Text
       onPress={() => console.log(el)}
       style={globalStyles.typography.semiBold[5]}>
       {el}
      </Text>
     </View>
    ))}
   </View>
   <View style={styles.container}>
    <View style={styles.calendar}>
     <IconButton
      type='outlined'
      icon={() => (
       <MaterialCommunityIcons
        name='calendar-outline'
        size={24}
        color='black'
        onPress={showDatepicker}
       />
      )}
      color={globalStyles.palette.primary[100]}
      size={20}
     />
     <Text onPress={showDatepicker}>
      {format(day, 'dd MMM yyyy', { locale: es })}
     </Text>
    </View>
    <View style={styles.carousel}>
     <IconButton
      type='outlined'
      icon={() => <AntDesign name='left' size={24} color='black' />}
      color={globalStyles.palette.primary[100]}
      size={20}
      onPress={() => diaSeleccionado('sub')}
     />
     <Text>{format(subDays(day, 1), 'dd')}</Text>
     <Text style={styles.carouselText}>{format(day, 'dd')}</Text>
     <Text>{format(addDays(day, 1), 'dd')}</Text>
     <IconButton
      type='outlined'
      icon={() => <AntDesign name='right' size={24} color='black' />}
      color={globalStyles.palette.primary[100]}
      size={20}
      onPress={() => diaSeleccionado('add')}
     />
    </View>
    <View>
     {show && <DateTimePicker value={date} mode={mode} onChange={onChange} />}
    </View>
   </View>
  </>
 );
}

const styles = StyleSheet.create({
 dayContainer: {
  marginHorizontal: 10,
 },
 typeOfDay: {
  marginVertical: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
 },
 container: {
  flexDirection: 'row',
  backgroundColor: 'white',

  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#ccc',
 },
 calendar: {
  padding: 4,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
 },
 carousel: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
 },

 carouselText: {
  marginHorizontal: 10,
  backgroundColor: globalStyles.palette.primary[40],
  padding: 10,
  borderRadius: 10,
  color: 'black',
 },
});
