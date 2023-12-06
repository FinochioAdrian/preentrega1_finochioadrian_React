import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";

import  { collection, getDocs, query, where } from 'firebase/firestore';

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
    <>
      
      {
       

        !products &&
        <div className="d-flex min-vw-100 vh-100 justify-content-center align-items-center"> 
          
          <Spinner animation="border" variant="primary" /> 

        </div>
              
        
      }
      {
        products&&products.length > 0 && <div >
        <h2 className="text-center my-3">{greeting} {categoryId&&categoryId}</h2>
        <ItemList products={products} />

        </div>
      }
      {

        
products&&products.length === 0 && <div >
        <h3 className="text-center my-3">No existe productos con la categoría: <br /> {categoryId&&categoryId}</h3>
        

        </div>
      }


     
    </>
  );
}

export default ItemListContainer;
