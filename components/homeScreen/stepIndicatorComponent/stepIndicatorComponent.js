import StepIndicator from 'react-native-step-indicator';
import { globalStyles } from '../../../styles/global';

const customStyles = {
 stepIndicatorSize: 25,
 currentStepIndicatorSize: 30,
 separatorStrokeWidth: 2,
 currentStepStrokeWidth: 3,
 stepStrokeCurrentColor: globalStyles.palette.primary[100],
 stepStrokeWidth: 3,
 stepStrokeFinishedColor: globalStyles.palette.primary[100],
 stepStrokeUnFinishedColor: globalStyles.palette.primary[20],
 separatorFinishedColor: globalStyles.palette.primary[100],
 separatorUnFinishedColor: globalStyles.palette.primary[20],
 stepIndicatorFinishedColor: globalStyles.palette.primary[100],
 stepIndicatorUnFinishedColor: '#ffffff',
 stepIndicatorCurrentColor: '#ffffff',
 stepIndicatorLabelFontSize: 13,
 currentStepIndicatorLabelFontSize: 13,
 stepIndicatorLabelCurrentColor: globalStyles.palette.primary[100],
 stepIndicatorLabelFinishedColor: '#ffffff',
 stepIndicatorLabelUnFinishedColor: '#aaaaaa',
 labelColor: '#999999',
 labelSize: 13,
 currentStepLabelColor: '#fe7013',
};

export default function StepIndicatorComponent({ step }) {
 return (
  <StepIndicator
   stepCount={3}
   customStyles={customStyles}
   currentPosition={step}
  />
 );
}
