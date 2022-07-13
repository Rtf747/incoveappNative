import { Text, View } from 'react-native';

export default function DetailScreen({ route }) {
 const { id, name, price, image, description, category } = route.params;
 return (
  <View>
   <Text>{id}</Text>
   <Text>{name}</Text>
   <Text>{price}</Text>
   <Text>{image}</Text>
   <Text>{description}</Text>
   <Text>{category}</Text>
  </View>
 );
}
