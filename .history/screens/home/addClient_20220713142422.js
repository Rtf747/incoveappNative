import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import { useDispatch } from 'react-redux';
import { TextInput, DefaultTheme } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useAddClientForm from '../../hooks/useAddClientForm/useAddClientForm';
import TextinputComponent from '../../components/addClient/textinputComponent';

const height = Dimensions.get('window').height;

export default function AddClient({ navigation }) {
 const dispatch = useDispatch();
 const step = 0;

 const { form, validForm, handleChange, handleSubmit } = useAddClientForm();

 console.log(Object.values(form), 'form');
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
      {/* <TextInput
       name='name'
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
       error={form.nameInputChange && form.nameIsValid ? false : true}
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
      />
      {form.cedulaInputChange ? null : (
       <Text style>El campo no puede estar vacío</Text>
      )}
      {form.cedulaIsValid || form.cedulaIsValid === null ? null : (
       <Text>El campo debe tener al menos 10 digitos</Text>
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
      />
      {form.addressInputChange ? null : (
       <Text style>El campo no puede estar vacío</Text>
      )}
      {form.addressIsValid || form.addressIsValid === null ? null : (
       <Text>El campo no acepta caracteres especiales</Text>
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
      />
      {form.phoneInputChange ? null : (
       <Text style>El campo no puede estar vacío</Text>
      )}
      {form.phoneIsValid || form.phoneIsValid === null ? null : (
       <Text>El campo debe tener 10 digitos</Text>
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
      />
      {form.emailInputChange ? null : (
       <Text style>El campo no puede estar vacío</Text>
      )}
      {form.emailIsValid || form.emailIsValid === null ? null : (
       <Text>Parece que esto no es un correo electronico</Text>
      )} */}
     </View>
     <View style={styles.buttonContainer}>
      <Pressable
       style={[
        styles.button,
        {
         backgroundColor: validForm(form)
          ? globalStyles.palette.primary[100]
          : '#fff',
        },
       ]}
       onPress={handleSubmit}>
       <Text style={styles.textButton}>Crear cliente</Text>
      </Pressable>
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
  color: 'red',
  textAlign: 'center',
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
