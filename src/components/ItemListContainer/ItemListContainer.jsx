import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import moduleName, { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from "../../services/Firebase/FirebaseConfig";

function ItemListContainer({ greeting }) {

  const [products, setProducts] = useState(null);
  

  const { id: categoryId } = useParams();

  useEffect(() => 
{
  const collectionRef = categoryId ? query(collection(db,'products'), where ('category', '==', categoryId))
   : collection(db,'products')
 
   getDocs(collectionRef)
   .then ( res => {
    const productsAdapted = res.docs.map(doc => {
      const data = doc.data()
      return {id:doc.id, ...data}


    })
    setProducts(productsAdapted)
   })
   .catch ( error => {
    console.error(error);
   })



   
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
