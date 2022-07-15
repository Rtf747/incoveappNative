import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { globalStyles } from '../../styles/global';
import NumberFormat from 'react-number-format';

export default function PayMethod({ navigation }) {
 const step = 1;
 return (
  <>
   <View style={styles.container}>
    <View style={styles.stepContainer}>
     <StepIndicatorComponent step={step} />
    </View>
    <View style={styles.cuotasContainer}>
     <Text>checkboxes</Text>
    </View>
    <View style={styles.buttonContainer}>
     <Pressable
      android_ripple={{ color: '#fff' }}
      style={styles.buttonCash}
      onPress={() => navigation.navigate('saleSummary')}>
      <Text style={styles.textButtonCash}>Efectivo</Text>
     </Pressable>
     <Pressable
      android_ripple={{ color: '#fff' }}
      style={styles.buttonCard}
      onPress={() => navigation.navigate('saleSummary')}>
      <Text style={styles.textButtonCard}>Tarjeta</Text>
     </Pressable>
    </View>
   </View>
   <View style={styles.totalContainer}>
    <Text style={globalStyles.typography.regular[4]}>Total</Text>
    <NumberFormat
     value={2255000.99}
     displayType='text'
     thousandSeparator='.'
     decimalSeparator=','
     prefix='$'
     renderText={(value) => (
      <Text style={globalStyles.typography.semiBold[4]}>{value}</Text>
     )}
    />
   </View>
  </>
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
 cuotasContainer: {
  flex: 1,
  backgroundColor: 'red',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 buttonContainer: {
  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 16,
 },
 buttonCash: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: globalStyles.palette.primary[100],
  marginVertical: 8,
 },
 buttonCard: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 12,
  backgroundColor: 'white',
  marginVertical: 8,
  borderWidth: 1,
  borderColor: globalStyles.palette.neutral[10],
 },
 textButtonCash: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
 },
 textButtonCard: {
  paddingVertical: 5,
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: globalStyles.palette.neutral[80],
 },
 totalContainer: {
  flex: 0.15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTopWidth: 1,
  borderColor: globalStyles.palette.neutral[10],
  backgroundColor: 'white',
  paddingHorizontal: 28,
 },
});
