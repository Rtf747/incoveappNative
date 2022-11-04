import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useRef } from 'react';
import SheetComponent from '../../components/homeScreen/sheetComponent/sheetComponent';
import { useFocusEffect } from '@react-navigation/native';
import { turnOffSearch } from '../../features/sales/salesSlice';
import SaleListComponents from '../../components/homeScreen/SaleListComponents';
import ButtonComponent from '../../components/homeScreen/ButtonComponent';

export default function HomeScreen({ navigation }) {
 const sales = useSelector((state) => state.sales.filterSales);

 const bottomSheet = useRef();
 const dispatch = useDispatch();

 useFocusEffect(
  useCallback(() => {
   dispatch(turnOffSearch());
  }, [navigation])
 );

 return (
  <>
   <SheetComponent bottomSheet={bottomSheet} />
   <SaleListComponents sales={sales} navigation={navigation} />
   <ButtonComponent navigation={navigation} />
  </>
 );
}
