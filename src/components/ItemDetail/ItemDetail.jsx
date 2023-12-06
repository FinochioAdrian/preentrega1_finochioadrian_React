import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Row } from "react-bootstrap";

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      name,
      price,
    };
    addItem(item, quantity,stock);
  };

  return (
    <article className="card__item--Detail">
      <header className="card__title--Detail">
        <h3>{name}</h3>
      </header>
      <picture className="card__picture--Detail">
        <img src={img} alt={name} />
      </picture>
      <section className="card__body--Detail">
        <p className="Info--Detail">
          Descripción:<b> {description}</b>
        </p>
        <p className="Info--Detail">
          Categoría: <b>{category}</b>
        </p>
        <div className="d-flex justify-content-center">
          <p className="Info--Detail">
            Stock: <b>{stock}</b>
          </p>
        </div>

        <p className="Info--Detail">
          Precio:<b> ${price}</b>
        </p>
      </section>
      <footer className="card__footer--Detail">
        {quantityAdded > 0 ? (
          <>
           <Row className="my-1">
           <Link to={"/"} className="ItemDetail_button__finished">
            {" "}
            Seguir Comprando
          </Link>
          </Row>
          <Row className="my-1">
           <Link to={"/cart"} className="ItemDetail_button__finished">
            {" "}
            Terminar Compra
          </Link>
          </Row>
          </>
         
         
        ) : (
          <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
