import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global';
import NumberFormat from 'react-number-format';
import { Snackbar } from 'react-native-paper';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { selectClient } from '../../features/clientData/clientSlice';
import { Avatar } from 'react-native-paper';

export default function DetailClient({ route, navigation }) {
 const [visible, setVisible] = useState(false);
 const onToggleSnackBar = () => setVisible(!visible);
 const onDismissSnackBar = () => setVisible(false);

 const dispatch = useDispatch();

 const onSubmit = () => {
  navigation.navigate('payMethod');

  dispatch(selectClient(route.params));
 };

 const {
  address,
  cedula,
  city,
  department,
  documentType,
  email,
  lastName,
  name,
  phone,
 } = route.params;

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
  <View style={styles.container}>
   <View style={styles.imageContainer}>
    <Avatar.Text
     size={200}
     label={initials}
     style={{
      backgroundColor: colors[getRandomInt(colors.length)],
     }}
    />
   </View>
   <View style={styles.detailsContainer}>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Nombre</Text>
     <Text style={styles.rightContainer}>
      {name} {lastName}
     </Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Tipo de documento</Text>
     <Text style={styles.rightContainer}>{documentType}</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Numero de documento</Text>
     <Text style={styles.rightContainer}>{cedula}</Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Dirección</Text>
     <Text style={styles.rightContainer}>
      {department}, {city}, {address}
     </Text>
    </View>
    <View style={styles.descriptionContainer}>
     <Text style={styles.leftContainer}>Telefono</Text>
     <Text style={styles.rightContainer}>{phone}</Text>
    </View>
   </View>
   <View style={styles.buttonContainer}>
    <Pressable
     style={styles.button}
     android_ripple={{ color: '#fff' }}
     onPress={onSubmit}>
     <Text style={styles.textButton}>Seleccionar cliente</Text>
    </Pressable>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingHorizontal: 24,
  backgroundColor: 'white',
 },
 imageContainer: {
  marginTop: 10,
  marginBottom: 20,
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
 },

 productPriceContainer: {
  flex: 1,
  alignItems: 'center',
 },
 productPrice: {
  fontSize: 24,
  fontWeight: 'bold',
  letterSpacing: 1,
 },
 detailsContainer: {
  flex: 3,
 },
 totalLabel: {
  color: globalStyles.palette.neutral[60],
 },
 leftContainer: {
  color: globalStyles.palette.neutral[50],
  flex: 1,
 },
 rightContainer: {
  flex: 1,
  textAlign: 'right',
 },

 descriptionContainer: {
  flex: 2,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 8,
 },

 buttonContainer: {
  flex: 1,
  justifyContent: 'flex-end',
  marginTop: 24,
 },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
  marginVertical: 8,
 },
 textButton: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
 },
});
