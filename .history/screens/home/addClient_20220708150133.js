import {
 Text,
 View,
 StyleSheet,
 Pressable,
 KeyboardAvoidingView,
} from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addSale } from '../../features/sales/salesSlice';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function AddClient({ navigation }) {
 const dispatch = useDispatch();

 const step = 0;

 return (
  <KeyboardAwareScrollView
   style={styles.container}
   enableOnAndroid
   extraHeight={120}>
   <View style={styles.stepContainer}>
    <StepIndicatorComponent step={step} />
   </View>
   <Formik
    initialValues={{
     name: '',
     cedula: '',
     address: '',
     phone: '',
    }}
    onSubmit={(values) => {
     const extraData = {
      id: 2004689420,
      date: '2022-03-05',
      time: '03:10 PM',
      amount: 7500,
      image: require('../../assets/images/aspiradora.png'),
     };
     //add extraData to values
     values = { ...values, ...extraData };
     console.log(values, 'addClientLog');
     dispatch(addSale(values));
    }}>
    {(formikProps) => (
     <>
      <View style={styles.card}>
       <TextInput
        label='Nombre'
        activeUnderlineColor={globalStyles.palette.primary[100]}
        style={styles.input}
        value={formikProps.values.name}
        onChangeText={formikProps.handleChange('name')}
       />
       <TextInput
        style={styles.input}
        label='Cedula'
        activeUnderlineColor={globalStyles.palette.primary[100]}
        keyboardType='numeric'
        onChangeText={formikProps.handleChange('cedula')}
        value={formikProps.values.cedula}
       />
       <TextInput
        style={styles.input}
        label='Dirección'
        activeUnderlineColor={globalStyles.palette.primary[100]}
        multiline
        onChangeText={formikProps.handleChange('address')}
        value={formikProps.values.address}
       />
       <TextInput
        style={styles.input}
        label='Teléfono'
        keyboardType='numeric'
        activeUnderlineColor={globalStyles.palette.primary[100]}
        onChangeText={formikProps.handleChange('phone')}
        value={formikProps.values.phone}
        selectionColor={globalStyles.palette.primary[100]}
       />
      </View>
      <View style={styles.buttonContainer}>
       <Pressable
        style={styles.button}
        //onPress={() => navigation.navigate('payMethod')}
        onPress={formikProps.handleSubmit}>
        <Text style={styles.textButton}>Crear cliente</Text>
       </Pressable>
      </View>
     </>
    )}
   </Formik>
  </KeyboardAwareScrollView>
 );
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: 'yellow',
  paddingHorizontal: 24,
 },
 stepContainer: {
  paddingVertical: 16,
 },
 card: {
  marginTop: 16,
  backgroundColor: globalStyles.palette.primary[10],
  borderRadius: 12,
  paddingHorizontal: 16,
  paddingVertical: 26,
 },
 input: {
  backgroundColor: globalStyles.palette.primary[10],
 },

 cardButtomText: {
  color: globalStyles.palette.primary[100],
 },
 buttonContainer: {
  marginTop: 200,
  paddingBottom: 16,
  backgroundColor: 'red',
 },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  borderColor: '#e7e7e8',
  borderWidth: 1,
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
