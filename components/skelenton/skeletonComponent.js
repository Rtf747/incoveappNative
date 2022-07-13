import { Text, View, StyleSheet, Pressable } from 'react-native';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

export default function SkeletonComponent() {
 return (
  <Pressable style={styles.container}>
   <MotiView
    transition={{
     type: 'timing',
    }}
    style={[styles.container, styles.padded]}
    animate={{ backgroundColor: '#ffffff' }}>
    <Skeleton colorMode={'light'} radius='round' height={75} width={75} />
    <Spacer />
    <Skeleton colorMode={'light'} width={200} height={200} />
    <Spacer height={8} />
    <Skeleton colorMode={'light'} width={'100%'} />
    <Spacer height={8} />
    <Skeleton colorMode={'light'} width={'100%'} />
   </MotiView>
  </Pressable>
 );
}

const styles = StyleSheet.create({
 shape: {
  justifyContent: 'center',
  height: 250,
  width: 250,
  borderRadius: 25,
  marginRight: 10,
  backgroundColor: 'white',
 },
 container: {
  flex: 1,
  justifyContent: 'flex-start',
  backgroundColor: 'limegreen',
 },
 padded: {
  padding: 16,
 },
});
