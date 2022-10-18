import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useEffect, useState } from 'react';
import { Skeleton } from 'moti/skeleton';
import useNewSale from '../../hooks/useNewSale/useNewSale';

//se utiliza para llenar un array de elementos
const skeletonElements = [...Array(8).keys()];

export default function NewSaleScreen({ navigation }) {
 const [cathegories, setCathegories] = useState(null);

 const { handleSubmit, getCathegories } = useNewSale(
  setCathegories,
  navigation,
  'https://rayparra.pythonanywhere.com/api/v1/categorias_list/'
 );

 useEffect(() => {
  getCathegories();
 }, []);

 return (
  <View style={styles.container}>
   <View style={styles.cardContainer}>
    {/* si queremos agregar mas categorias y hacer scroll debemos cambiar el .map por un flatList */}
    {cathegories
     ? cathegories.map((cathegory) => (
        <TouchableWithoutFeedback
         onPress={() => handleSubmit(cathegory)}
         key={cathegory.id}>
         <View
          style={[
           {
            backgroundColor:
             cathegory.descripcion === 'Oferta'
              ? globalStyles.palette.accent.red[10]
              : cathegory.descripcion === 'Nuevos'
              ? globalStyles.palette.primary[10]
              : cathegory.descripcion === 'Ver todo'
              ? globalStyles.palette.accent.yellow[10]
              : globalStyles.palette.neutral[5],
           },
           styles.cathegoriesCards,
          ]}>
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
        <View key={el} style={styles.skeletonElements}>
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
 skeletonElements: {
  marginTop: 10,
  width: '48%',
  height: '18%',
  borderRadius: 12,
 },
 cathegoriesCards: {
  marginTop: 10,
  width: '48%',
  height: '18%',
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'flex-end',
 },
});
