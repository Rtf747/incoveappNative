import { Image, StyleSheet, View } from 'react-native';

export default function ImageComponent({ productImage }) {
 return (
  <View style={styles.imageContainer}>
   <Image source={productImage} style={styles.image} />
  </View>
 );
}

const styles = StyleSheet.create({
 image: {
  flex: 1,
  width: 300,
  height: 300,
 },
 imageContainer: {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
 },
});
