import { StyleSheet, View, Pressable, Text } from 'react-native';
import CardComponent from '../../components/homeScreen/cardComponent/cardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { globalStyles } from '../../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import { useCallback, useRef, useEffect, useState } from 'react';
import SheetComponent from '../../components/homeScreen/sheetComponent/sheetComponent';
import { IconButton } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFocusEffect } from '@react-navigation/native';
import { turnOffSearch } from '../../features/sales/salesSlice';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

export default function HomeScreen({ navigation }) {
 const sales = useSelector((state) => state.sales.filterSales);

 const bottomSheet = useRef();
 const dispatch = useDispatch();

 useFocusEffect(
  useCallback(() => {
   dispatch(turnOffSearch());
  }, [navigation])
 );

 /*  NetInfo.fetch().then((state) => {
  console.log('Connection type', state.type);
  console.log('Is connected?', state.isConnected);
 }); */

 return (
  <>
   <SheetComponent bottomSheet={bottomSheet} />
   <View
    style={{
     flex: 1,
     backgroundColor: globalStyles.palette.neutral[0],
    }}>
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
     <View style={styles.box}>
      <IconButton
       type='outlined'
       icon={() => <MaterialIcons name='tune' size={24} color='black' />}
       color={globalStyles.palette.primary[100]}
       size={20}
       style={styles.iconBox}
       onPress={() => bottomSheet.current.show()}
      />
      <IconButton
       type='outlined'
       icon={() => <MaterialIcons name='add' size={24} color='black' />}
       color={globalStyles.palette.primary[100]}
       size={20}
       style={styles.iconBox}
       onPress={() => navigation.navigate('NewSaleScreen')}
      />
     </View>
    </View>
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
 box: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 102,
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
});
