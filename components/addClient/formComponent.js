import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
globalStyles;
import { TextInput, DefaultTheme } from 'react-native-paper';
import ModalSelector from 'react-native-modal-selector';
import { colombia } from '../../data/countryData';
import { documentType } from '../../data/documentType';
import { useState } from 'react';

const FormComponent = ({ form, handleChange }) => {
 const [department, setDepartment] = useState(null);

 const handleChangeDepartment = (option) => {
  handleChange('department', option.departamento);
  const cities = option.ciudades.map((city, index) => {
   return {
    key: index + 1,
    label: city,
   };
  });

  setDepartment(cities);
 };

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
      value={form.lastName}
      onChangeText={(value) => handleChange('lastName', value)}
      onSubmitEditing={() => {
       this.thirdTextInput.focus();
      }}
      ref={(input) => {
       this.secondTextInput = input;
      }}
      blurOnSubmit={false}
      error={
       (form.lastNameInputChange === true && form.lastNameIsValid === null) ||
       (form.lastNameIsValid === true && form.lastNameInputChange === true)
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
     {form.lastNameInputChange ? null : (
      <Text style={styles.errorText}>El campo no puede estar vacio</Text>
     )}
     {form.lastNameIsValid || form.lastNameIsValid === null ? null : (
      <Text style={styles.errorText}>El campo no puede contener numeros</Text>
     )}
    </View>
   </View>

   <ModalSelector
    data={documentType}
    initValue='Tipo de documento'
    selectTextStyle={{
     textAlign: 'left',
     marginVertical: 8,
    }}
    selectStyle={{
     borderWidth: 0,
     borderBottomWidth: 2,
     borderBottomColor: '#dbdbdb',
    }}
    initValueTextStyle={{
     textAlign: 'left',
     marginVertical: 8,
     color: '#757575',
    }}
    cancelText='Cancelar'
    onChange={(option) => {
     handleChange('documentType', option.label);
    }}
   />

   {/* ----------------------------------------- */}

   <TextInput
    returnKeyType='next'
    style={styles.input}
    label='Numero de documento'
    activeUnderlineColor={globalStyles.palette.primary[100]}
    keyboardType='numeric'
    onChangeText={(value) => handleChange('cedula', value)}
    value={form.cedula}
    ref={(input) => {
     this.thirdTextInput = input;
    }}
    onSubmitEditing={() => {
     this.fourthTextInput.focus();
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
     <ModalSelector
      data={colombia}
      initValue='Departamento'
      keyExtractor={(item) => item.id}
      labelExtractor={(item) => item.departamento}
      selectTextStyle={{
       textAlign: 'left',
       marginVertical: 8,
      }}
      selectStyle={{
       borderWidth: 0,
       borderBottomWidth: 2,
       borderBottomColor: '#dbdbdb',
      }}
      initValueTextStyle={{
       textAlign: 'left',
       marginVertical: 8,
       color: '#757575',
      }}
      cancelText='Cancelar'
      onChange={(option) => {
       handleChangeDepartment(option);
      }}
     />
    </View>
    <View style={styles.rightContainer}>
     <ModalSelector
      data={department ? department : []}
      initValue='Ciudad'
      disabled={department ? false : true}
      selectTextStyle={{
       textAlign: 'left',
       marginVertical: 8,
      }}
      selectStyle={{
       borderWidth: 0,
       borderBottomWidth: 2,
       borderBottomColor: '#dbdbdb',
      }}
      initValueTextStyle={{
       textAlign: 'left',
       marginVertical: 8,
       color: '#757575',
      }}
      cancelText='Cancelar'
      onChange={(option) => {
       handleChange('city', option.label);
      }}
     />
    </View>
   </View>
   <TextInput
    returnKeyType='next'
    style={styles.input}
    label='Barrio (Opcional)'
    activeUnderlineColor={globalStyles.palette.primary[100]}
    onChangeText={(value) => handleChange('neighborhood', value)}
    value={form.neighborhood}
    onSubmitEditing={() => {
     this.fourthTextInput.focus();
    }}
    blurOnSubmit={false}
   />

   <TextInput
    multiline
    style={styles.input}
    label='Dirección'
    activeUnderlineColor={globalStyles.palette.primary[100]}
    onChangeText={(value) => handleChange('address', value)}
    value={form.address}
    ref={(input) => {
     this.fourthTextInput = input;
    }}
    onSubmitEditing={() => {
     this.fifthTextInput.focus();
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
     this.fifthTextInput = input;
    }}
    onSubmitEditing={() => {
     this.sixthTextInput.focus();
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
     this.sixthTextInput = input;
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
