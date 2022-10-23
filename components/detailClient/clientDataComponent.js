import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function ClientDataComponent({ clientData }) {
 const {
  address,
  cedula,
  city,
  department,
  documentType,
  lastName,
  name,
  phone,
 } = clientData;

 return (
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
 );
}

const styles = StyleSheet.create({
 detailsContainer: {
  flex: 3,
 },

 descriptionContainer: {
  flex: 2,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 8,
 },

 leftContainer: {
  color: globalStyles.palette.neutral[50],
  flex: 1,
 },
 rightContainer: {
  flex: 1,
  textAlign: 'right',
 },
});
