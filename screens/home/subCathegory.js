import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useEffect, useState } from 'react';
import useSubCathegory from '../../hooks/useSubCathegory.js/useSubCathegory';
import CardComponent from '../../components/subCategory/cardComponent';
import TitleComponent from '../../components/subCategory/titleComponent';

export default function NewSaleScreen({ route, navigation }) {
 const [cathegories, setCathegories] = useState(null);

 const { descripcion } = route.params;
 const cathegoryName = descripcion;

 const { getCathegories } = useSubCathegory(
  setCathegories,
  route,
  'https://rayparra.pythonanywhere.com/api/v1/subcategorias_list/'
 );

 useEffect(() => {
  getCathegories();
 }, []);

 return (
  <View style={styles.container}>
   <TitleComponent cathegoryName={cathegoryName} />
   <CardComponent cathegories={cathegories} navigation={navigation} />
  </View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
 },
});
