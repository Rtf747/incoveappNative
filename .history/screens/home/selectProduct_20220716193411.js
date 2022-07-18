import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useSelector } from 'react-redux';
import CardComponent from '../../components/inventory/cardComponent/cardComponent';

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
});