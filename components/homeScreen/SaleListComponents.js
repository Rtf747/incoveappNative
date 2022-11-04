import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import CardComponent from './cardComponent/cardComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SaleListComponents({ sales, navigation }) {
 return (
  <KeyboardAwareScrollView>
   <View style={styles.container}>
    {sales.map((sale, index) => (
     <CardComponent
      key={index}
      item={sale}
      image={sale.image}
      clientName={sale.clientName}
      description={sale.address}
      amount={sale.amount}
      productColor={sale.productColor}
      navigation={navigation}
     />
    ))}
   </View>
  </KeyboardAwareScrollView>
 );
}

const styles = StyleSheet.create({
 container: {
  paddingBottom: 30,
  backgroundColor: globalStyles.palette.neutral[0],
  flex: 1,
 },
});
