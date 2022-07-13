import { StyleSheet, Text, View, FlatList } from 'react-native';
import CardComponent from '../../components/inventory/cardComponent/cardComponent';
import { useSelector } from 'react-redux';

export default function Inventory({ navigation }) {
 const inventory = useSelector((state) => state.inventory);

 return (
  <View style={styles.listContainer}>
   <FlatList
    data={inventory}
    renderItem={({ item }) => (
     <CardComponent
      item={item}
      image={item.image}
      name={item.name}
      description={item.description}
      amount={item.price}
      navigation={navigation}
     />
    )}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 listContainer: {
  backgroundColor: '#fff',
  padding: 8,
 },
});
