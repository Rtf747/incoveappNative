import { useEffect, useState } from 'react';
import NewSaleComponent from '../../components/newSaleScreen/NewSaleComponent';
import useNewSale from '../../hooks/useNewSale/useNewSale';

//se utiliza para llenar un array de elementos
const skeletonElements = [...Array(8).keys()];

export default function NewSaleScreen({ navigation }) {
 const [cathegories, setCathegories] = useState(null);

 const { handleSubmit, getCathegories } = useNewSale(
  setCathegories,
  navigation,
  'https://rayparra.pythonanywhere.com/api/v1/categorias_list/'
 );

 useEffect(() => {
  getCathegories();
 }, []);

 return (
  <NewSaleComponent
   skeletonElements={skeletonElements}
   cathegories={cathegories}
   handleSubmit={handleSubmit}
  />
 );
}
