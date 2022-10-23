import { StyleSheet, View, FlatList } from 'react-native';
import ClientComponent from '../../components/homeScreen/cardComponent/clientComponent';
import { useDispatch, useSelector } from 'react-redux';
import { globalStyles } from '../../styles/global';
import { useFocusEffect } from '@react-navigation/native';
import { turnOffSearch } from '../../features/clientData/clientSlice';
import { useCallback } from 'react';

export default function SelectClient({ navigation }) {
 const filterClient = useSelector((state) => state.clientData.filterClient);

 const dispatch = useDispatch();

 useFocusEffect(
  useCallback(() => {
   dispatch(turnOffSearch());
  }, [navigation])
 );

 return (
  <>
   <View style={styles.container}>
    <FlatList
     data={filterClient}
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
 container: {
  paddingBottom: 10,
  backgroundColor: globalStyles.palette.neutral[0],
  flex: 1,
 },
});
