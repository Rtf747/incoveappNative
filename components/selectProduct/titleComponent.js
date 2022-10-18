import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

const TitleComponent = ({ subCathegoryName }) => {
 return (
  <View style={styles.title}>
   <Text style={globalStyles.typography.regular[4]}>
    {subCathegoryName.charAt(0).toUpperCase() + subCathegoryName.slice(1)}
   </Text>
  </View>
 );
};

export default TitleComponent;

const styles = StyleSheet.create({
 title: {
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: globalStyles.palette.neutral[0],
  paddingLeft: 24,
 },
});
