import { useSelector } from 'react-redux';
import CardComponent from '../inventory/cardComponent/cardComponent';

export default function AllProductsComponent({ navigation, onToggleSnackBar }) {
 const allProducts = useSelector((state) => state.inventory.products);

 return (
  <>
   {allProducts.map((product, index) => (
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
