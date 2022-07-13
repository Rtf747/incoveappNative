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
  <View>
   <StepIndicatorComponent />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: 'white',
  paddingHorizontal: 24,
  flex: 1,
 },
 stepContainer: {
  paddingVertical: 16,
 },

 formContainer: {
  flex: 1,
 },

 card: {
  backgroundColor: globalStyles.palette.primary[10],
  borderRadius: 12,
  paddingHorizontal: 16,
  paddingBottom: 16,
 },
 input: {
  backgroundColor: globalStyles.palette.primary[10],
 },
 cardButtomText: {
  color: globalStyles.palette.primary[100],
 },
 buttonContainer: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  paddingTop: 1,
  backgroundColor: 'white',
  paddingHorizontal: 24,
 },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  borderColor: '#e7e7e8',
  borderWidth: 1,
  marginBottom: 16,
  //backgroundColor: globalStyles.palette.primary[100]
 },
 textButton: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: '#e7e7e8',
 },
});
