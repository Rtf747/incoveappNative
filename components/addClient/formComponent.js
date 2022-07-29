import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
globalStyles;
import { TextInput, DefaultTheme } from 'react-native-paper';

const FormComponent = ({ form, handleChange }) => {
 return (
  <View style={styles.card}>
   <View style={styles.splitter}>
    <View style={styles.leftContainer}>
     <TextInput
      returnKeyType='next'
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
    </View>
    <View style={styles.rightContainer}>
     <TextInput
      returnKeyType='next'
      label='Apellido'
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
    </View>
   </View>

   {/* aqui va a ir tipo de documento */}
   <TextInput
    returnKeyType='next'
    style={styles.input}
    label='Tipo de documento'
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
    returnKeyType='next'
    style={styles.input}
    label='Numero de documento'
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

   <View style={styles.splitter}>
    <View style={styles.leftContainer}>
     {/* aqui vamos a colocar departamento */}
     <TextInput
      returnKeyType='next'
      multiline
      style={styles.input}
      label='Departamento'
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
    </View>
    <View style={styles.rightContainer}>
     {/* aqui vamos a colocar ciudad */}

     <TextInput
      returnKeyType='next'
      multiline
      style={styles.input}
      label='Ciudad'
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
    </View>
   </View>
   <TextInput
    returnKeyType='next'
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
    returnKeyType='next'
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
    returnKeyType='done'
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
 );
};

export default FormComponent;

const styles = StyleSheet.create({
 card: {
  backgroundColor: 'white',
  paddingHorizontal: 16,
  paddingVertical: 24,
 },
 input: {
  backgroundColor: 'white',
 },
 splitter: {
  flexDirection: 'row',
  justifyContent: 'space-around',
 },
 leftContainer: {
  flex: 1,
  marginRight: 6,
 },
 rightContainer: {
  marginLeft: 6,

  flex: 1,
 },
 errorText: {
  textAlign: 'center',
  color: 'red',
 },
});
