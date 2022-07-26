import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../../styles/global';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Skeleton } from 'moti/skeleton';

const skeletonElements = [...Array(8).keys()];

export default function NewSaleScreen({ route, navigation }) {
 const [cathegories, setCathegories] = useState(null);

 //aqui esta el id de la categoria
 //console.log(route.params.id);

 const { descripcion } = route.params;
 const cathegoryName = descripcion;

 const getCathegories = async () => {
  try {
   const response = await axios(
    'https://incoveapp.herokuapp.com/api/v1/subcategorias_list/'
   );

   //todas las subcategorias
   console.log(
    response.data.filter(
     (subcategoria) => subcategoria.categoria === route.params.id
    )
   );

   const cuttingFirstPosition = response.data.slice(1);
   setCathegories(cuttingFirstPosition);
  } catch (error) {
   console.error(error);
  }
 };

 useEffect(() => {
  getCathegories();
 }, []);

 return (
  <View style={styles.container}>
   <View style={styles.title}>
    <Text style={globalStyles.typography.regular[4]}>{cathegoryName}</Text>
   </View>
   <View style={styles.cardContainer}>
    {/* si queremos agregar mas categorias y hacer scroll debemos cambiar el .map por un flatList */}
    {cathegories
     ? cathegories.map((cathegory) => (
        <TouchableWithoutFeedback
         onPress={() => navigation.navigate('SelectProduct', cathegory)}
         key={cathegory.id}>
         <View
          style={{
           backgroundColor:
            cathegory.descripcion === 'Ofertas'
             ? globalStyles.palette.accent.red[10]
             : cathegory.descripcion === 'Nuevos'
             ? globalStyles.palette.primary[10]
             : cathegory.descripcion === 'Ver todo'
             ? globalStyles.palette.accent.yellow[10]
             : globalStyles.palette.neutral[5],
           marginTop: 10,
           width: '48%',
           height: '18%',
           borderRadius: 12,
           alignItems: 'center',
           justifyContent: 'flex-end',
          }}>
          <Text
           style={{
            marginBottom: 10,
            color:
             cathegory.descripcion === 'Ofertas'
              ? globalStyles.palette.accent.red[100]
              : cathegory.descripcion === 'Nuevos'
              ? '#0381FF'
              : cathegory.descripcion === 'Ver todo'
              ? globalStyles.palette.accent.yellow[180]
              : globalStyles.palette.neutral[90],
           }}>
           {cathegory.descripcion}
          </Text>
         </View>
        </TouchableWithoutFeedback>
       ))
     : skeletonElements.map((el) => (
        <View
         key={el}
         style={{
          marginTop: 10,
          width: '48%',
          height: '18%',
          borderRadius: 12,
         }}>
         <Skeleton colorMode={'light'} width={'100%'} height={'43%'} />
        </View>
       ))}
   </View>
  </View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
 },
 title: {
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: globalStyles.palette.neutral[0],
  paddingLeft: 24,
 },
 cardContainer: {
  marginTop: 18,
  marginHorizontal: 24,
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  backgroundColor: 'white',
 },
 card: {
  backgroundColor: 'pink',
  width: 132.5,
  height: 80,
  borderRadius: 12,
 },
});
