import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../styles/global';
import { RadioButton } from 'react-native-paper';

export default function RadioButtonComponent({
 name,
 label,
 payInterval,
 setPayInterval,
}) {
 return (
  <View style={styles.radioButtonGroup}>
   <Text
    style={{
     color:
      payInterval === name
       ? globalStyles.palette.primary[100]
       : globalStyles.palette.neutral[50],
    }}>
    {label}
   </Text>
   <RadioButton
    uncheckedColor={globalStyles.palette.neutral[50]}
    color={globalStyles.palette.primary[100]}
    value={name}
    status={payInterval === name ? 'checked' : 'unchecked'}
    onPress={() => setPayInterval(name)}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 radioButtonGroup: {
  alignItems: 'center',
  flexDirection: 'column-reverse',
 },
});
