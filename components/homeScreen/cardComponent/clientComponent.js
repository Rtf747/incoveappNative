import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';

export default function ClientComponent({
 item,
 name,
 lastName,
 documentType,
 cedula,
 department,
 city,
 address,
 phone,
 email,
 navigation,
}) {
 const initials = `${name.slice(0, 1)}${lastName.slice(0, 1)}`;

 const colors = [
  'aqua',
  'aquamarine',
  'chocolate',
  'darkgoldenrod',
  'dodgerblue',
  'greenyellow',
  'khaki',
  'lightseagreen',
  'mediumaquamarine',
  'mediumorchid',
  'mediumpurple',
  'mediumvioletred',
  'navajowhite',
  'olivedrab',
  'orange',
  'orchid',
  'peru',
  'peachpuff',
  'plum',
  'royalblue',
  'sandybrown',
  'seagreen',
  'salmon',
  'teal',
  'yellowgreen',
  'tomato',
  'teal',
 ];

 const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
 };

 return (
  <View>
   <Pressable
    onPress={() => navigation.navigate('DetailClient', item)}
    android_ripple={{ color: globalStyles.palette.primary[100] }}>
    <View style={styles.container}>
     <View style={styles.leftContainer}>
      <Avatar.Text
       size={50}
       label={initials}
       style={{
        backgroundColor: colors[getRandomInt(colors.length)],
       }}
      />
      {/* <MaterialIcons name='account-circle' size={50} color='black' /> */}
     </View>
     <View style={styles.centerContainer}>
      <Text style={[styles.itemName, globalStyles.typography.extraBold[6]]}>
       {name} {lastName}
      </Text>
      <Text
       style={[styles.itemDescription, globalStyles.typography.regular[7]]}>
       {department}, {city}, {address}
      </Text>
     </View>
     <View style={styles.rightContainer}>
      <MaterialIcons name='add-circle-outline' size={24} color='black' />
     </View>
    </View>
   </Pressable>
  </View>
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
  flex: 0.5,
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
