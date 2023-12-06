import { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { db } from "../../services/Firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [fetchError, setFetchError] = useState("");
  const { id:itemId } = useParams();

  useEffect(() => {



    const docRef = doc(db,'products',itemId)

    getDoc(docRef)
    .then(res => {
      
      const data = res.data()
      if (!data){
        throw new Error ('No data found')
      }
      const productsAdapted = {id:res.id, ...data}
      setProduct(productsAdapted)      
    })
    .catch(error =>{
      console.error(error);
      setFetchError(error)
    })
   
  }, [itemId]);

  return (
    <>
    
      <div className="ItemDetailContainer">
        {
        !product && !fetchError &&(
          <Spinner animation="border" role="status" />)
        }
        {

        fetchError &&
          <h2>El producto no Existe!!</h2>
          }
          
        { product && !fetchError &&
            <ItemDetail {...product} />
            
        }
          
      </div>
    </>
  );
};

export default ItemDetailContainer;
