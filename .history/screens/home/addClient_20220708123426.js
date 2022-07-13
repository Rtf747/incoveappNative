import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addSale } from '../../features/sales/salesSlice';

export default function AddClient({ navigation }) {
 const dispatch = useDispatch();

 const step = 0;

 return (
  <View style={styles.container}>
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
        style={styles.input}
        placeholder='Nombre'
        onChangeText={formikProps.handleChange('name')}
        value={formikProps.values.name}
       />
       <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Cedula'
        onChangeText={formikProps.handleChange('cedula')}
        value={formikProps.values.cedula}
       />
       <TextInput
        style={styles.input}
        placeholder='Dirección'
        multiline
        onChangeText={formikProps.handleChange('address')}
        value={formikProps.values.address}
       />
       <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Teléfono'
        onChangeText={formikProps.handleChange('phone')}
        value={formikProps.values.phone}
       />
      </View>
      <View style={styles.buttonContainer}>
       <Pressable
        style={styles.button}
        //onPress={() => navigation.navigate('payMethod')}
        onPress={formikProps.handleSubmit}>
        <Text style={styles.textButton}>Agregar cliente</Text>
       </Pressable>
      </View>
     </>
    )}
   </Formik>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
  paddingHorizontal: 24,
 },
 stepContainer: {
  paddingVertical: 16,
 },
 card: {
  height: 200,
  backgroundColor: globalStyles.palette.neutral[5],
  borderRadius: 12,
  padding: 16,
  justifyContent: 'space-between',
 },
 input: {
  borderWidth: 1,
  borderColor: '#cfcfcf',
  borderRadius: 12,
  paddingHorizontal: 12,
  paddingVertical: 6,
 },

 cardButtomText: {
  color: globalStyles.palette.primary[100],
 },
 buttonContainer: {
  flex: 1,
  justifyContent: 'flex-end',
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
  //color: 'white',
  color: '#e7e7e8',
 },
});
