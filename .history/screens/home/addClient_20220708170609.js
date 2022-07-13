import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addSale } from '../../features/sales/salesSlice';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const height = Dimensions.get('window').height;

export default function AddClient({ navigation }) {
 const dispatch = useDispatch();

 const step = 0;

 return (
  <View style={styles.container}>
   <StepIndicatorComponent step={step} />
   <View style={styles.card}>
    <TextInput />
    <TextInput />
    <TextInput />
    <TextInput />
   </View>
   <View style={styles.buttonContainer}></View>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
  paddingHorizontal: 24,
 },
 card: {
  flex: 3,
  backgroundColor: globalStyles.palette.primary[10],
  borderRadius: 12,
 },
 buttonContainer: {
  flex: 1,
  backgroundColor: globalStyles.palette.secondary[10],
 },
});
