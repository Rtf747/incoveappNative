import { Text, View } from 'react-native';

export default function DetailScreen({ route }) {
 const { id, cedula, address, date, time, amount } = route.params;
 return (
  <View>
   <Text>{id}</Text>
   <Text>{cedula}</Text>
   <Text>{address}</Text>
   <Text>{date}</Text>
   <Text>{time}</Text>
   <Text>{amount}</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
 },
});
