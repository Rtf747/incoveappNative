import { View, StyleSheet } from 'react-native';
import StepIndicatorComponent from '../../components/homeScreen/stepIndicatorComponent/stepIndicatorComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useAddClientForm from '../../hooks/useAddClientForm/useAddClientForm';
import { useState } from 'react';
import FormComponent from '../../components/addClient/formComponent';
import ButtomComponent from '../../components/addClient/buttomComponent';
import SnackbarComponent from '../../components/addClient/snackbarComponent';

export default function AddClient({ navigation }) {
 const [visible, setVisible] = useState(false);
 const step = 0;

 const {
  form,
  validForm,
  handleChange,
  onSubmit,
  onToggleSnackBar,
  onDismissSnackBar,
 } = useAddClientForm(navigation, setVisible, visible);

 return (
  <View style={styles.ContainerTest}>
   <KeyboardAwareScrollView
    contentContainerStyle={{
     flexGrow: 1,
     justifyContent: 'space-between',
    }}>
    <View style={styles.uno}>
     <StepIndicatorComponent step={step} />
    </View>
    <View style={styles.dos}>
     <FormComponent form={form} handleChange={handleChange} />
    </View>
    <ButtomComponent
     validForm={validForm}
     form={form}
     onSubmit={onSubmit}
     onToggleSnackBar={onToggleSnackBar}
    />
    <SnackbarComponent
     visible={visible}
     onDismissSnackBar={onDismissSnackBar}
    />
   </KeyboardAwareScrollView>
  </View>
 );
}

const styles = StyleSheet.create({
 ContainerTest: {
  flex: 1,
  backgroundColor: 'white',
 },
 uno: {
  flex: 0.6,
  backgroundColor: 'white',
  justifyContent: 'center',
 },
 dos: {
  flex: 6,
  backgroundColor: 'white',
 },
});
