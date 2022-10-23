import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useDispatch } from 'react-redux';
import { selectClient } from '../../features/clientData/clientSlice';
import AvatarComponent from '../../components/detailClient/avatarComponent';
import ClientDataComponent from '../../components/detailClient/clientDataComponent';
import ButtonContainer from '../../components/detailClient/buttonContainer';

export default function DetailClient({ route, navigation }) {
 const dispatch = useDispatch();

 const clientData = route.params;
 const { name, lastName } = clientData;

 const onSubmit = () => {
  navigation.navigate('payMethod');

  dispatch(selectClient(clientData));
 };

 const initials = `${name.slice(0, 1)}${lastName.slice(0, 1)}`;

 return (
  <View style={styles.container}>
   <AvatarComponent initials={initials} />
   <ClientDataComponent clientData={clientData} />
   <ButtonContainer onSubmit={onSubmit} />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingHorizontal: 24,
  backgroundColor: 'white',
 },
});
