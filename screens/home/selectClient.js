import { StyleSheet, Text, View, FlatList } from 'react-native';
import ClientComponent from '../../components/homeScreen/cardComponent/clientComponent';
import { useSelector } from 'react-redux';
import { globalStyles } from '../../styles/global';

export default function SelectClient({ navigation }) {
 const clientList = useSelector((state) => state.clientData.clientList);

 console.log(clientList.map((el) => el.name));

 return (
  <>
   <View style={styles.container}>
    <FlatList
     data={clientList}
     style={styles.list}
     renderItem={({ item }) => (
      <ClientComponent
       item={item}
       name={item.name}
       lastName={item.lastName}
       documentType={item.documentType}
       cedula={item.cedula}
       department={item.department}
       city={item.city}
       address={item.address}
       phone={item.phone}
       email={item.email}
       navigation={navigation}
      />
     )}
    />
   </View>
  </>
 );
}

const styles = StyleSheet.create({
 total: {
  backgroundColor: globalStyles.palette.neutral[0],
  alignItems: 'center',
 },
 totalText: {
  backgroundColor: globalStyles.palette.secondary[10],
  paddingHorizontal: 8,
  paddingVertical: 5,
  borderRadius: 12,
 },
 container: {
  paddingBottom: 10,
  backgroundColor: globalStyles.palette.neutral[0],
  flex: 1,
 },

 title: {
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: globalStyles.palette.neutral[0],
  paddingLeft: 24,
 },

 listTitle: {
  fontSize: 16,
  marginLeft: 8,
 },
 boxContainer: {
  position: 'absolute',
  alignItems: 'center',
  top: '91%',
  width: '100%',
  height: 48,
 },
 box: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 102,
  height: 48,
  borderRadius: 20,
  backgroundColor: '#E7E7E8',
 },
 iconBox: {
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 4,
  width: 36,
  height: 36,
  borderRadius: 12,
  backgroundColor: 'white',
 },
});
