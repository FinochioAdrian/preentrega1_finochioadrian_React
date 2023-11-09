import './item.css'
const Item = ({ id, name, price, category, img, stock, description }) => {
  return <article className="card__item">
    <header className='card__title'>
        <h3>{name}</h3>
    </header>
    <picture className='card__picture'>
        <img src={img} alt={name} />
    </picture>
    <section className='card__body'>
        <p>Precio: ${price}</p>
        <p>Categoría: {category}</p>
        <p>Stock disponible: {stock}</p>
        
    </section>
    <footer className='card__footer'>
        <button className='card__footer--button'>Ver detalle</button>
    </footer>
  </article>;
};

export default Item;
