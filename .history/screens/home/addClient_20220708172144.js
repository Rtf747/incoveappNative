import {
 Text,
 View,
 StyleSheet,
 Pressable,
 Dimensions,
 KeyboardAvoidingView,
 TextInput,
 TouchableWithoutFeedback,
 Keyboard,
 Button,
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
  <KeyboardAvoidingView
   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
   style={styles.container}>
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.inner}>
     <Text style={styles.header}>
      <StepIndicatorComponent step={step} />
     </Text>
     <TextInput placeholder='Username' style={styles.textInput} />
     <View style={styles.btnContainer}>
      <Button title='Submit' onPress={() => null} />
     </View>
    </View>
   </TouchableWithoutFeedback>
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
