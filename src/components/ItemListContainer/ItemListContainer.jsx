import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {


  const [products, setProducts] = useState([]);
 
  const {id} =useParams();

  useEffect(() => {
    console.log(id);
    if (id) {
      getProductByCategory(id)
      .then((res) =>console.log(res))
      .catch((error) => {
        console.log(error);
      });
      
    }
    else {
      getProducts()
      .then((res) => setProducts(res))
      .catch((error) => {
        console.log(error);
      });
    }
 

  }, [id]);

  

  return (
    <div>
      <h1>{greeting}</h1>
      { console.log("products1" ,products),
      products&&<ItemList products={products} />}
    </div>
  );
}

export default ItemListContainer;
