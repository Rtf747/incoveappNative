import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { filterProducts } from '../../features/inventory/inventorySlice';
import { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFocusEffect } from '@react-navigation/native';
import { turnOffSearch } from '../../features/inventory/inventorySlice';
import { useCallback } from 'react';
import BadgeComponent from '../../components/selectProduct/badgeComponent';
import TitleComponent from '../../components/selectProduct/titleComponent';
import CategorizedProductsComponent from '../../components/selectProduct/categorizedProductsComponent';
import AllProductsComponent from '../../components/selectProduct/allProductsComponent';
import useSelectProduct from '../../hooks/useSelectProduct/useSelectProduct';

export default function SelectProduct({ route, navigation }) {
 const [visible, setVisible] = useState(false);
 const [error, setError] = useState(false);

 const {
  subCathegoryId,
  subCathegoryName,
  dispatch,
  onToggleSnackBar,
  onDismissSnackBar,
  onDismissError,
  onSubmit,
  cart,
  total,
 } = useSelectProduct(route, navigation, visible, setVisible, error, setError);

 useFocusEffect(
  useCallback(() => {
   dispatch(turnOffSearch());
  }, [navigation])
 );

 useEffect(() => {
  dispatch(filterProducts(subCathegoryId));
 }, []);

 return (
  <>
   <View style={styles.background}>
    <KeyboardAwareScrollView>
     <TitleComponent subCathegoryName={subCathegoryName} />
     <View style={styles.container}>
      {subCathegoryName === 'Ver todo' ? (
       <AllProductsComponent
        navigation={navigation}
        onToggleSnackBar={onToggleSnackBar}
       />
      ) : (
       <CategorizedProductsComponent
        navigation={navigation}
        onToggleSnackBar={onToggleSnackBar}
       />
      )}
     </View>
    </KeyboardAwareScrollView>
   </View>
   <BadgeComponent
    cart={cart}
    error={error}
    total={total}
    onDismissSnackBar={onDismissSnackBar}
    onDismissError={onDismissError}
    onSubmit={onSubmit}
    visible={visible}
   />
  </>
 );
}

const styles = StyleSheet.create({
 container: {
  paddingBottom: 30,
  flex: 1,
  backgroundColor: globalStyles.palette.neutral[0],
 },
 background: {
  flex: 1,
  backgroundColor: globalStyles.palette.neutral[0],
 },
});
