import { StyleSheet, View, Pressable, Text } from 'react-native';
import CardComponent from '../../components/homeScreen/cardComponent/cardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { globalStyles } from '../../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import { useCallback, useRef, useEffect, useState } from 'react';
import SheetComponent from '../../components/homeScreen/sheetComponent/sheetComponent';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFocusEffect } from '@react-navigation/native';
import { turnOffSearch } from '../../features/sales/salesSlice';

export default function HomeScreen({ navigation }) {
 const sales = useSelector((state) => state.sales.filterSales);

 const bottomSheet = useRef();
 const dispatch = useDispatch();

 useFocusEffect(
  useCallback(() => {
   dispatch(turnOffSearch());
  }, [navigation])
 );

 return (
  <>
   <SheetComponent bottomSheet={bottomSheet} />
   <KeyboardAwareScrollView>
    <View style={styles.container}>
     {sales.map((sale, index) => (
      <CardComponent
       key={index}
       item={sale}
       image={sale.image}
       clientName={sale.clientName}
       description={sale.address}
       amount={sale.amount}
       productColor={sale.productColor}
       navigation={navigation}
      />
     ))}
    </View>
   </KeyboardAwareScrollView>
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
  </>
 );
}

const styles = StyleSheet.create({
 container: {
  paddingBottom: 30,
  backgroundColor: globalStyles.palette.neutral[0],
  flex: 1,
 },

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
