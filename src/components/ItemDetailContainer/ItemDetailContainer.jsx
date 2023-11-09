import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [fetchError, setFetchError] = useState("");
  const { id:itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((data) => {
        setProduct(data);
        setFetchError("");
      })
      .catch((error) => {
        setFetchError(error);
      });
  }, [itemId]);

  return (
    <>
      <div className="ItemDetailContainer">
        {(!fetchError && <ItemDetail {...product} />) || (
          <h2 s>Producto no Encontrado!!</h2>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
