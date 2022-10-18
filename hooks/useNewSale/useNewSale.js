import axios from 'axios';

export default function useNewSale(setCathegories, navigation, url) {
 const handleSubmit = (cathegory) => {
  if (cathegory.descripcion === 'Ver todo') {
   navigation.navigate('SelectProduct', cathegory);
  } else {
   navigation.navigate('SubCathegory', cathegory);
  }
 };

 const getCathegories = async () => {
  try {
   const response = await axios(url);

   const cuttingFirstPosition = response.data;
   setCathegories(cuttingFirstPosition);
  } catch (error) {
   console.log('error');
   console.error(error);
  }
 };

 return {
  handleSubmit,
  getCathegories,
 };
}
