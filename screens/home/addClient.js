import { Text, View, StyleSheet, Pressable } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import { useDispatch } from 'react-redux';
import { Snackbar } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useAddClientForm from '../../hooks/useAddClientForm/useAddClientForm';
import { useState } from 'react';
import FormComponent from '../../components/addClient/formComponent';
import { selectClient } from '../../features/clientData/clientSlice';

export default function AddClient({ navigation }) {
 const [visible, setVisible] = useState(false);
 const step = 0;

 const onToggleSnackBar = () => setVisible(!visible);
 const onDismissSnackBar = () => setVisible(false);

 const dispatch = useDispatch();

 const { form, validForm, handleChange, handleSubmit } =
  useAddClientForm(navigation);

 const onSubmit = () => {
  console.log(form);
  handleSubmit();
  navigation.navigate('payMethod');
  dispatch(selectClient(form));
 };

 return (
  <View style={styles.ContainerTest}>
   <KeyboardAwareScrollView
    contentContainerStyle={{
     flexGrow: 1,
     justifyContent: 'space-between',
    }}>
    <View style={styles.uno}>
     <StepIndicatorComponent step={step} />
    </View>
    <View style={styles.dos}>
     <FormComponent form={form} handleChange={handleChange} />
    </View>
    <View style={styles.tres}>
     <Pressable
      android_ripple={{ color: '#fff' }}
      style={[
       styles.button,
       {
        backgroundColor: validForm(form)
         ? globalStyles.palette.primary[100]
         : '#fff',
       },
      ]}
      onPress={validForm(form) ? onSubmit : onToggleSnackBar}>
      <Text style={styles.textButton}>Crear cliente</Text>
     </Pressable>
     <Snackbar
      duration={2000}
      style={{
       backgroundColor: 'red',
      }}
      visible={visible}
      onDismiss={onDismissSnackBar}>
      Complete todos los campos
     </Snackbar>
    </View>
   </KeyboardAwareScrollView>
  </View>
 );
}

const styles = StyleSheet.create({
 ContainerTest: {
  flex: 1,
  backgroundColor: 'white',
 },
 uno: {
  flex: 0.6,
  backgroundColor: 'white',
  justifyContent: 'center',
 },
 dos: {
  flex: 6,
  backgroundColor: 'white',
 },
 tres: {
  flex: 1,
  justifyContent: 'flex-end',
  backgroundColor: 'white',
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
  marginHorizontal: 16,
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
