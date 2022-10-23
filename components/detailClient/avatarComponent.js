import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/avatarColor';
import { Avatar } from 'react-native-paper';

export default function AvatarComponent({ initials }) {
 const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
 };

 return (
  <View style={styles.imageContainer}>
   <Avatar.Text
    size={200}
    label={initials}
    style={{
     backgroundColor: colors[getRandomInt(colors.length)],
    }}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 imageContainer: {
  marginTop: 10,
  marginBottom: 20,
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
 },
});
