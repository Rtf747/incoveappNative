import {
 Text,
 View,
 StyleSheet,
 Pressable,
 Dimensions,
 KeyboardAvoidingView,
 TextInput,
} from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addSale } from '../../features/sales/salesSlice';
//import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const height = Dimensions.get('window').height;

export default function AddClient({ navigation }) {
 const dispatch = useDispatch();

 const step = 0;

 return (
  <KeyboardAvoidingView behavior='padding' style={styles.container}>
   <StepIndicatorComponent step={step} />
   <View style={styles.card}>
    <TextInput />
    <TextInput />
    <TextInput />
    <TextInput />
   </View>
   <View style={styles.buttonContainer}>
    <Pressable
     style={styles.button}
     //onPress={() => navigation.navigate('payMethod')}
     //onPress={formikProps.handleSubmit}
    >
     <Text style={styles.textButton}>Crear cliente</Text>
    </Pressable>
   </View>
  </KeyboardAvoidingView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 inner: {
  padding: 24,
  flex: 1,
  justifyContent: 'space-around',
 },
 header: {
  fontSize: 36,
  marginBottom: 48,
 },
 textInput: {
  height: 40,
  borderColor: '#000000',
  borderBottomWidth: 1,
  marginBottom: 36,
 },
 btnContainer: {
  backgroundColor: 'white',
  marginTop: 12,
 },
});
