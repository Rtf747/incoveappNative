import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addSale } from '../../features/sales/salesSlice';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';

const validationSchema = yup.object({
 name: yup.string().required().min(3),
 cedula: yup.string().required().min(10),
 address: yup.string().required().min(3),
 phone: yup.string().required().min(10),
});

const height = Dimensions.get('window').height;

export default function AddClient({ navigation }) {
 const dispatch = useDispatch();
 const step = 0;

 return (
  <>
   <KeyboardAwareScrollView
    style={styles.container}
    enableOnAndroid
    scrollEnabled={false}>
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
     validationSchema={validationSchema}
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
      navigation.navigate('payMethod');
     }}>
     {(formikProps) => (
      <View style={styles.formContainer}>
       <View style={styles.card}>
        <TextInput
         label='Nombre'
         activeUnderlineColor={globalStyles.palette.primary[100]}
         style={styles.input}
         value={formikProps.values.name}
         onChangeText={formikProps.handleChange('name')}
         onSubmitEditing={() => {
          this.secondTextInput.focus();
         }}
         blurOnSubmit={false}
        />
        {formikProps.touched.name && formikProps.errors.name ? (
         <Text>{formikProps.errors.name}</Text>
        ) : null}
        <TextInput
         style={styles.input}
         label='Cedula'
         activeUnderlineColor={globalStyles.palette.primary[100]}
         keyboardType='numeric'
         onChangeText={formikProps.handleChange('cedula')}
         value={formikProps.values.cedula}
         ref={(input) => {
          this.secondTextInput = input;
         }}
         onSubmitEditing={() => {
          this.thirdTextInput.focus();
         }}
         blurOnSubmit={false}
        />
        {formikProps.touched.cedula && formikProps.errors.cedula ? (
         <Text>{formikProps.errors.cedula}</Text>
        ) : null}
        <TextInput
         multiline
         style={styles.input}
         label='Dirección'
         activeUnderlineColor={globalStyles.palette.primary[100]}
         onChangeText={formikProps.handleChange('address')}
         value={formikProps.values.address}
         ref={(input) => {
          this.thirdTextInput = input;
         }}
         onSubmitEditing={() => {
          this.fourthTextInput.focus();
         }}
         blurOnSubmit={false}
        />
        {formikProps.touched.address && formikProps.errors.address ? (
         <Text>{formikProps.errors.address}</Text>
        ) : null}
        <TextInput
         style={styles.input}
         label='Teléfono'
         keyboardType='numeric'
         activeUnderlineColor={globalStyles.palette.primary[100]}
         onChangeText={formikProps.handleChange('phone')}
         value={formikProps.values.phone}
         selectionColor={globalStyles.palette.primary[100]}
         ref={(input) => {
          this.fourthTextInput = input;
         }}
        />
        {formikProps.touched.phone && formikProps.errors.phone ? (
         <Text>{formikProps.errors.phone}</Text>
        ) : null}
       </View>
       <View style={styles.buttonContainer}>
        <Pressable
         style={styles.button}
         //onPress={() => navigation.navigate('payMethod')}
         onPress={formikProps.handleSubmit}>
         <Text style={styles.textButton}>Crear cliente</Text>
        </Pressable>
       </View>
      </View>
     )}
    </Formik>
   </KeyboardAwareScrollView>
  </>
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
  height: height - 150,
  justifyContent: 'space-between',
 },
 card: {
  backgroundColor: globalStyles.palette.primary[10],
  borderRadius: 12,
  paddingHorizontal: 16,
  paddingBottom: 24,
 },
 input: {
  backgroundColor: globalStyles.palette.primary[10],
 },
 cardButtomText: {
  color: globalStyles.palette.primary[100],
 },
 buttonContainer: {
  paddingTop: 1,
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
