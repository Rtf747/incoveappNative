import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../../styles/global';
import NumberFormat from 'react-number-format';

const ExactQuotas = ({ cuota, quotaAmount, totalCalculated }) => {
 return (
  <>
   <View style={styles.descriptionContainer}>
    <Text
     style={[
      styles.leftContainer,
      {
       color: 'black',
       fontWeight: 'bold',
      },
     ]}>
     Cantidad de cuotas
    </Text>
    <Text
     style={[
      styles.rightContainer,
      {
       fontWeight: 'bold',
      },
     ]}>
     Monto
    </Text>
   </View>
   <View style={styles.descriptionContainer}>
    <Text style={styles.leftContainer}>{cuota}</Text>
    <Text style={styles.rightContainer}>
     <NumberFormat
      value={quotaAmount}
      isNumericString={true}
      displayType='text'
      thousandSeparator='.'
      decimalSeparator=','
      decimalScale={2}
      prefix='$'
      renderText={(value) => <Text> {value} </Text>}
     />
    </Text>
   </View>

   <View
    style={[
     styles.descriptionContainer,
     {
      borderTopColor: globalStyles.palette.neutral[10],
      borderTopWidth: 1,
      paddingVertical: 10,
     },
    ]}>
    <Text
     style={[
      styles.leftContainer,
      {
       fontWeight: 'bold',
       color: 'black',
       fontSize: 20,
      },
     ]}>
     Por pagar
    </Text>
    <Text style={styles.rightContainer}>
     <NumberFormat
      value={totalCalculated.toFixed(2)}
      isNumericString={true}
      displayType='text'
      thousandSeparator='.'
      decimalSeparator=','
      decimalScale={2}
      prefix='$'
      renderText={(value) => (
       <Text
        style={{
         fontWeight: 'bold',
         fontSize: 20,
        }}>
        {value}
       </Text>
      )}
     />
    </Text>
   </View>
  </>
 );
};

export default ExactQuotas;

const styles = StyleSheet.create({
 descriptionContainer: {
  flex: 0.1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 16,
 },
 leftContainer: {
  color: globalStyles.palette.neutral[50],
  flex: 1,
 },
 rightContainer: {
  flex: 1,
  textAlign: 'right',
 },
});
