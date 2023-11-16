import { useState } from "react";
import "./ItemCount.css";
const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };
  const decrement =()=>{
    if(quantity>0)setQuantity(quantity-1)
  }

  return (
    <div className="ItemCount">
        
      <div className="ItemCount__inputs">
          <button onClick={decrement} className="ItemCount_button ItemCount__inputs--Decrement">-</button>
          <h4 style={{display:"inline-block"}} className="ItemCount__inputs--Quantity">{quantity}</h4>
          <button onClick={increment} className="ItemCount_button ItemCount__inputs--Increment">+</button>
      </div>
      <div>
        <button onClick={()=> onAdd(quantity)} className="ItemCount_button" disabled={!stock||!quantity||quantity>stock}>
            Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
