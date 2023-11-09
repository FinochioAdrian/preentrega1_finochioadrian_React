import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

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
      <h1>{greeting}</h1>
      {<ItemList products={products} />}
    </div>
  );
}

export default ItemListContainer;
