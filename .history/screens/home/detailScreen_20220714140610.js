import { StyleSheet, Text, View } from 'react-native';

export default function DetailScreen({ route }) {
 const { id, cedula, address, date, time, amount } = route.params;
 return (
  <View style={styles.container}>
   <View>
    <Text>imagen</Text>
   </View>
   <Text>{id}</Text>
   <Text>{cedula}</Text>
   <Text>{address}</Text>
   <Text>{date}</Text>
   <Text>{time}</Text>
   <Text>{amount}</Text>
  </View>
 );
}

/* introduce esto: 

  <Text>{id}</Text>
   <Text>{cedula}</Text>
   <Text>{address}</Text>
   <Text>{date}</Text>
   <Text>{time}</Text>
   <Text>{amount}</Text>*/

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
  paddingHorizontal: 24,
 },
 stepContainer: {
  paddingVertical: 16,
 },
 image: {
  width: 100,
  height: 100,
 },
 imageContainer: {
  paddingTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
 },
 productDescription: {
  marginTop: 26,
  paddingHorizontal: 36,
 },
 productDescriptionBottom: {
  paddingVertical: 8,
 },
 productDescriptionBottomText: [
  globalStyles.typography.regular[6],
  {
   color: globalStyles.palette.neutral[60],
   textAlign: 'center',
  },
 ],
 orderInfoTitle: {
  paddingVertical: 16,
 },
 subTitle: [
  globalStyles.typography.regular[6],
  {
   color: globalStyles.palette.neutral[60],
   paddingVertical: 8,
  },
 ],
 buttonContainer: {
  marginVertical: 16,
 },
 buttonCash: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
  marginVertical: 8,
 },
 textButtonCash: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
 },
});
