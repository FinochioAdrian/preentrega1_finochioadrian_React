import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState(null);
  

  const { id: categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId)
      .then((res) => setProducts(res))
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  

  return (
    <div>
      
      {
       

        !products ?
        <Spinner animation="border" variant="primary" /> 
        :  
        <>
        <h1>{greeting} {categoryId&&categoryId}</h1>
        <ItemList products={products} />
        
        </>
      }
     
    </div>
  );
}

export default ItemListContainer;
