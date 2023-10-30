import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  console.log(id, name, price, category, img, stock, description);
  return (
    <article className="card__item--Detail">
      <header className="card__title--Detail">
        <h3>{name}</h3>
      </header>
      <picture className="card__picture--Detail">
        <img src={img} alt={name} />
      </picture>
      <section className="card__body--Detail">
        <p className="Info--Detail">Categoría: {category}</p>
        <p className="Info--Detail">Descripción: {description}</p>
        
        <p className="Info--Detail">Descripción: ${price}</p>
      </section>
      <footer className="card__footer--Detail">
      <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("Cantidad Agregada",quantity)}/>
      </footer>
    </article>
  );
};

export default ItemDetail;
