import { Skeleton } from 'moti/skeleton';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function CardComponent({ cathegories, navigation }) {
 const skeletonElements = [...Array(8).keys()];

 return (
  <View style={styles.cardContainer}>
   {cathegories
    ? cathegories.map((cathegory) => (
       <TouchableWithoutFeedback
        onPress={() => navigation.navigate('SelectProduct', cathegory)}
        key={cathegory.id}>
        <View
         style={[
          {
           backgroundColor:
            cathegory.descripcion === 'Ofertas'
             ? globalStyles.palette.accent.red[10]
             : cathegory.descripcion === 'Nuevos'
             ? globalStyles.palette.primary[10]
             : cathegory.descripcion === 'Ver todo'
             ? globalStyles.palette.accent.yellow[10]
             : globalStyles.palette.neutral[5],
          },
          styles.cathegories,
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
          {cathegory.descripcion.charAt(0).toUpperCase() +
           cathegory.descripcion.slice(1)}
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
 );
}

const styles = StyleSheet.create({
 cathegories: {
  marginTop: 10,
  width: '48%',
  height: '18%',
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'flex-end',
 },
 skeletonElements: {
  marginTop: 10,
  width: '48%',
  height: '18%',
  borderRadius: 12,
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
});
