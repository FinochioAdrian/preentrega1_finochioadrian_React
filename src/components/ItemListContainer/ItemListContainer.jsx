import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
