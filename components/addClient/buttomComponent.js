import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../../styles/global';

export default function ButtomComponent({
 validForm,
 form,
 onSubmit,
 onToggleSnackBar,
}) {
 return (
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
 );
}

const styles = StyleSheet.create({
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
