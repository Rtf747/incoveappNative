import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../../styles/global';

export default function ButtonComponent({ onSubmit, validation }) {
 return (
  <View style={styles.buttonContainer}>
   <Pressable
    android_ripple={{ color: '#fff' }}
    style={[
     styles.button,
     {
      backgroundColor: validation ? globalStyles.palette.primary[100] : 'white',
     },
    ]}
    onPress={onSubmit}>
    <Text style={styles.textButton}>Aceptar</Text>
   </Pressable>
  </View>
 );
}

const styles = StyleSheet.create({
 buttonContainer: {
  flex: 0.5,
  justifyContent: 'flex-end',
 },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
  marginBottom: 8,
  borderColor: '#e7e7e8',
  borderWidth: 1,
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
