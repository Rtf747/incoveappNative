import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import { useDispatch } from 'react-redux';
import { TextInput, DefaultTheme, Snackbar } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useAddClientForm from '../../hooks/useAddClientForm/useAddClientForm';
import { useState } from 'react';

const height = Dimensions.get('window').height;

export default function AddClient({ navigation }) {
 const [visible, setVisible] = useState(false);
 const step = 0;

 const onToggleSnackBar = () => setVisible(!visible);
 const onDismissSnackBar = () => setVisible(false);

 const dispatch = useDispatch();

 const { form, validForm, handleChange, handleSubmit } =
  useAddClientForm(navigation);

 const onSubmit = () => {
  handleSubmit();
 };

 return (
  <>
   <KeyboardAwareScrollView
    style={styles.container}
    enableOnAndroid
    scrollEnabled={false}>
    <View style={styles.stepContainer}>
     <StepIndicatorComponent step={step} />
    </View>

    <View style={styles.formContainer}>
     <View style={styles.card}>
      <TextInput
       label='Nombre'
       activeUnderlineColor={globalStyles.palette.primary[100]}
       style={styles.input}
       value={form.name}
       onChangeText={(value) => handleChange('name', value)}
       onEndEditing={() => console.log('esto es onblur')}
       onSubmitEditing={() => {
        this.secondTextInput.focus();
       }}
       blurOnSubmit={false}
       error={
        (form.nameInputChange === true && form.nameIsValid === null) ||
        (form.nameIsValid === true && form.nameInputChange === true)
         ? false
         : true
       }
       theme={{
        ...DefaultTheme,
        colors: {
         error: 'red',
        },
       }}
      />
      {form.nameInputChange ? null : (
       <Text style={styles.errorText}>El campo no puede estar vacio</Text>
      )}
      {form.nameIsValid || form.nameIsValid === null ? null : (
       <Text style={styles.errorText}>El campo no puede contener numeros</Text>
      )}
      <TextInput
       style={styles.input}
       label='Cedula'
       activeUnderlineColor={globalStyles.palette.primary[100]}
       keyboardType='numeric'
       onChangeText={(value) => handleChange('cedula', value)}
       value={form.cedula}
       ref={(input) => {
        this.secondTextInput = input;
       }}
       onSubmitEditing={() => {
        this.thirdTextInput.focus();
       }}
       blurOnSubmit={false}
       error={
        (form.cedulaInputChange === true && form.cedulaIsValid === null) ||
        (form.cedulaIsValid === true && form.cedulaInputChange === true)
         ? false
         : true
       }
       theme={{
        ...DefaultTheme,
        colors: {
         error: 'red',
        },
       }}
      />
      {form.cedulaInputChange ? null : (
       <Text style={styles.errorText}>El campo no puede estar vacío</Text>
      )}
      {form.cedulaIsValid || form.cedulaIsValid === null ? null : (
       <Text style={styles.errorText}>
        El campo debe tener al menos 10 digitos
       </Text>
      )}

      <TextInput
       multiline
       style={styles.input}
       label='Dirección'
       activeUnderlineColor={globalStyles.palette.primary[100]}
       onChangeText={(value) => handleChange('address', value)}
       value={form.address}
       ref={(input) => {
        this.thirdTextInput = input;
       }}
       onSubmitEditing={() => {
        this.fourthTextInput.focus();
       }}
       blurOnSubmit={false}
       error={
        (form.addressInputChange === true && form.addressIsValid === null) ||
        (form.addressIsValid === true && form.addressInputChange === true)
         ? false
         : true
       }
       theme={{
        ...DefaultTheme,
        colors: {
         error: 'red',
        },
       }}
      />
      {form.addressInputChange ? null : (
       <Text style={styles.errorText}>El campo no puede estar vacío</Text>
      )}
      {form.addressIsValid || form.addressIsValid === null ? null : (
       <Text style={styles.errorText}>
        El campo no acepta caracteres especiales
       </Text>
      )}

      <TextInput
       style={styles.input}
       label='Teléfono'
       keyboardType='numeric'
       activeUnderlineColor={globalStyles.palette.primary[100]}
       onChangeText={(value) => handleChange('phone', value)}
       value={form.phone}
       selectionColor={globalStyles.palette.primary[100]}
       ref={(input) => {
        this.fourthTextInput = input;
       }}
       onSubmitEditing={() => {
        this.fifthTextInput.focus();
       }}
       blurOnSubmit={false}
       error={
        (form.phoneInputChange === true && form.phoneIsValid === null) ||
        (form.phoneIsValid === true && form.phoneInputChange === true)
         ? false
         : true
       }
       theme={{
        ...DefaultTheme,
        colors: {
         error: 'red',
        },
       }}
      />
      {form.phoneInputChange ? null : (
       <Text style={styles.errorText}>El campo no puede estar vacío</Text>
      )}
      {form.phoneIsValid || form.phoneIsValid === null ? null : (
       <Text style={styles.errorText}>El campo debe tener 10 digitos</Text>
      )}

      <TextInput
       style={styles.input}
       label='Correo electrónico'
       activeUnderlineColor={globalStyles.palette.primary[100]}
       onChangeText={(value) => handleChange('email', value)}
       value={form.email}
       selectionColor={globalStyles.palette.primary[100]}
       ref={(input) => {
        this.fifthTextInput = input;
       }}
       error={
        (form.emailInputChange === true && form.emailIsValid === null) ||
        (form.emailIsValid === true && form.emailInputChange === true)
         ? false
         : true
       }
       theme={{
        ...DefaultTheme,
        colors: {
         error: 'red',
        },
       }}
      />
      {form.emailInputChange ? null : (
       <Text style={styles.errorText}>El campo no puede estar vacío</Text>
      )}
      {form.emailIsValid || form.emailIsValid === null ? null : (
       <Text style={styles.errorText}>
        Parece que esto no es un correo electronico
       </Text>
      )}
     </View>
     <View style={styles.buttonContainer}>
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
       style={{
        backgroundColor: globalStyles.palette.primary[100],
       }}
       visible={visible}
       onDismiss={onDismissSnackBar}
       action={{
        label: 'Entendido',
       }}>
       Complete todos los campos
      </Snackbar>
     </View>
    </View>
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
 errorText: {
  textAlign: 'center',
  color: 'red',
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
