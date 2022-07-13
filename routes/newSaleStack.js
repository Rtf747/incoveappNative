import axios from 'axios';
import { useRef, useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';

export default function NewSaleStack() {
 const [advice, setAdvice] = useState('');

 const bottomSheet = useRef();

 const getAdvice = async () => {
  try {
   const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
   };

   const response = await axios(
    'https://api.adviceslip.com/advice/' + getRandomId(1, 200)
   );
   console.log(getRandomId);
   console.log(response.data.slip.advice);

   setAdvice(response.data.slip.advice);
  } catch (error) {
   console.error(error);
  }
 };

 return (
  <View style={styles.container}>
   <BottomSheet hasDraggableIcon ref={bottomSheet} height={600}>
    <Text>Hello</Text>
   </BottomSheet>
   <TouchableOpacity
    style={styles.button}
    onPress={() => bottomSheet.current.show()}></TouchableOpacity>
   <Text>newSaleStack</Text>
   <Text>{advice}</Text>
   <Button title='Get Advice' onPress={() => getAdvice()} />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'skyblue',
 },
 button: {
  height: 50,
  width: 150,
  backgroundColor: '#140078',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  shadowColor: '#8559da',
  shadowOpacity: 0.7,
  shadowOffset: {
   height: 4,
   width: 4,
  },
  shadowRadius: 5,
  elevation: 6,
 },
});
