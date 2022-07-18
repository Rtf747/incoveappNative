import {
 StyleSheet,
 Text,
 View,
 Image,
 TouchableWithoutFeedback,
} from 'react-native';
import NumberFormat from 'react-number-format';
import { globalStyles } from '../../../styles/global';

export default function CardComponent({
 item,
 image,
 name,
 description,
 amount,
 onToggleSnackBar,
 navigation,
}) {
 return (
  <TouchableWithoutFeedback
   //onPress={() => navigation.navigate('DetailProductScreen', item)}
   //onPress={() => console.log(item)}
   onPress={() => onToggleSnackBar()}>
   <View style={styles.container}>
    <View style={styles.leftContainer}>
     <Image style={styles.image} source={image} />
    </View>
    <View style={styles.centerContainer}>
     <Text style={[styles.itemName, globalStyles.typography.extraBold[6]]}>
      {name}
     </Text>
     <Text style={[styles.itemDescription, globalStyles.typography.regular[7]]}>
      {description}
     </Text>
    </View>
    <View style={styles.rightContainer}>
     <NumberFormat
      value={amount}
      displayType='text'
      thousandSeparator='.'
      decimalSeparator=','
      prefix='$'
      renderText={(value) => <Text style={styles.itemPrice}>{value}</Text>}
     />
    </View>
   </View>
  </TouchableWithoutFeedback>
 );
}

const styles = StyleSheet.create({
 container: {
  flexDirection: 'row',
  padding: 16,
  marginHorizontal: 16,
 },
 leftContainer: {
  justifyContent: 'center',
  alignItems: 'center',
 },
 centerContainer: {
  flex: 2,
 },
 rightContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
 },
 image: {
  width: 40,
  height: 40,
  resizeMode: 'contain',
  borderRadius: 50,
  borderWidth: 2,
  borderColor: '#e7e7e8',
 },
 itemName: {
  paddingHorizontal: 16,
 },
 itemDescription: {
  paddingHorizontal: 16,
  marginVertical: 4,
  color: globalStyles.palette.neutral[60],
 },
 itemPrice: {
  fontSize: 16,
  fontWeight: 'bold',
 },
});
