import axios from 'axios';

export default function useSubCathegory(setCathegories, route, url) {
 const getCathegories = async () => {
  try {
   const response = await axios(url);

   const filterResponse = response.data.filter(
    (subcategoria) => subcategoria.categoria === route.params.id
   );

   const cuttingFirstPosition = filterResponse.slice(1);
   setCathegories(cuttingFirstPosition);
  } catch (error) {
   console.error(error);
  }
 };

 return {
  getCathegories,
 };
}
