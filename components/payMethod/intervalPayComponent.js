import { StyleSheet, Text, View } from 'react-native';
import { radioButtons } from '../../data/radioButtons';
import RadioButtonComponent from './radioButton/radioButtonComponent';

export default function IntervalPayComponent({ payInterval, setPayInterval }) {
 return (
  <>
   <View style={styles.intervalContainer}>
    <Text style={styles.interval}>Intervalo de pagos</Text>
   </View>
   <View style={styles.cuotasContainer}>
    {radioButtons.map((el) => (
     <RadioButtonComponent
      key={el.name}
      name={el.name}
      label={el.label}
      payInterval={payInterval}
      setPayInterval={setPayInterval}
     />
    ))}
   </View>
  </>
 );
}

const styles = StyleSheet.create({
 intervalContainer: {
  borderTopColor: '#e6e6e6',
  borderTopWidth: 1,
  paddingTop: 20,
 },
 interval: {
  fontWeight: 'bold',
 },
 cuotasContainer: {
  flex: 0.3,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderBottomColor: '#e6e6e6',
  borderBottomWidth: 1,
  paddingBottom: 20,
 },
});
