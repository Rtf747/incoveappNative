import { StyleSheet, Text, View, FlatList } from 'react-native';
import CardComponent from '../../components/homeScreen/cardComponent/cardComponent';
import { useSelector } from 'react-redux';
import { globalStyles } from '../../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import { useRef } from 'react';
import SheetComponent from '../../components/homeScreen/sheetComponent/sheetComponent';
import { IconButton } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
 const sales = useSelector((state) => state.sales);
 const bottomSheet = useRef();

 return (
  <>
   <SheetComponent bottomSheet={bottomSheet} />
   <View style={styles.total}>
    <Text style={[styles.totalText, globalStyles.typography.semiBold[7]]}>
     Total hoy: $255,000
    </Text>
   </View>
   <View style={styles.title}>
    <Text style={globalStyles.typography.regular[4]}>Últimas ventas</Text>
   </View>
   <View style={styles.container}>
    <FlatList
     data={sales}
     style={styles.list}
     renderItem={({ item }) => (
      <CardComponent
       item={item}
       image={item.image}
       name={item.name}
       description={item.address}
       amount={item.amount}
       navigation={navigation}
      />
     )}
    />
   </View>
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
  </>
 );
}

const styles = StyleSheet.create({
 total: {
  backgroundColor: globalStyles.palette.neutral[0],
  alignItems: 'center',
 },
 totalText: {
  backgroundColor: globalStyles.palette.secondary[10],
  paddingHorizontal: 8,
  paddingVertical: 5,
  borderRadius: 12,
 },
 container: {
  paddingBottom: 70,
  backgroundColor: globalStyles.palette.neutral[0],
  flex: 1,
 },

 title: {
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: globalStyles.palette.neutral[0],
  paddingLeft: 24,
 },

 listTitle: {
  fontSize: 16,
  marginLeft: 8,
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
  backgroundColor: 'transparent',
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
