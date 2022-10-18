import { useSelector } from 'react-redux';
import CardComponent from '../inventory/cardComponent/cardComponent';

export default function CategorizedProductsComponent({
 navigation,
 onToggleSnackBar,
}) {
 const searchProduct = useSelector((state) => state.inventory.filterProducts);

 const categorizedProducts = useSelector(
  (state) => state.inventory.categorizedProducts
 );

 return (
  <>
   {searchProduct.length === 0
    ? categorizedProducts.map((product, index) => (
       <CardComponent
        key={index}
        item={product}
        id={product.productId}
        image={product.productImage}
        name={product.productName}
        description={product.productDescription}
        amount={product.productPrice}
        navigation={navigation}
        onToggleSnackBar={onToggleSnackBar}
       />
      ))
    : searchProduct.map((product, index) => (
       <CardComponent
        key={index}
        item={product}
        id={product.productId}
        image={product.productImage}
        name={product.productName}
        description={product.productDescription}
        amount={product.productPrice}
        navigation={navigation}
        onToggleSnackBar={onToggleSnackBar}
       />
      ))}
  </>
 );
}
