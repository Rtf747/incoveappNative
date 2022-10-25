import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function TitleComponent({ cathegoryName }) {
 return (
  <View style={styles.title}>
   <Text style={globalStyles.typography.regular[4]}>{cathegoryName}</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 title: {
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: globalStyles.palette.neutral[0],
  paddingLeft: 24,
 },
});
