import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useSelector } from 'react-redux';
import CardComponent from '../../components/inventory/cardComponent/cardComponent';
import { MaterialIcons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';

export default function SelectProduct({ route, navigation }) {
 const products = useSelector((state) => state.inventory);

 const { descripcion } = route.params;

 const cathegoryName = descripcion;

 return (
  <>
   <View style={styles.title}>
    <Text style={globalStyles.typography.regular[4]}>{cathegoryName}</Text>
   </View>
   <View style={styles.container}>
    <FlatList
     data={products}
     style={styles.list}
     renderItem={({ item }) => (
      <CardComponent
       item={item}
       image={item.productImage}
       name={item.productName}
       description={item.productDescription}
       amount={item.productPrice}
       navigation={navigation}
      />
     )}
    />
   </View>
   <View style={styles.boxContainer}>
    <View style={styles.box}>
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
 container: {
  flex: 1,
  backgroundColor: globalStyles.palette.neutral[0],
 },
 title: {
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: globalStyles.palette.neutral[0],
  paddingLeft: 24,
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
