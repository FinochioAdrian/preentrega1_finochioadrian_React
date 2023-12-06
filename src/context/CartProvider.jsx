import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (item, quantity,stock) => {
    
    if ( isInCart(item.id)) {

     
      if (!isQuantityAboveStock (item,quantity,stock)){const newCart = cart.map((prod)=> {
        
        if(prod.id === item.id ) {
          
            return {
              ...prod,
              quantity: prod.quantity + quantity
            } 
          
          
        }
        return prod

      })

      setCart(newCart)}else{msgSinStock()}
    } else {
     
      setCart([
        ...cart,
        {...item,
        quantity,}
      ]);
    }
  };
  const isQuantityAboveStock = (item,quantity,stock) => {
    const newItem = cart.find((prod)=> {
        return prod.id === item.id
      
    });

    return newItem.quantity+quantity>stock ? true : false
     
      
    
    


  }
  const msgSinStock= ()=>{
    
    Swal.fire('No hay Suficiente Stock ')
  }
  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };
  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (itemId) => {
    
    return cart.some((prod) => prod.id === itemId);
  };

  useEffect(() => {
    calcTotalQuantity();
    calcTotalPrice();
  }, [cart]);

  const calcTotalQuantity = () => {
    const totalQuantity = cart.reduce((acumulador, prod) => {
      return acumulador + prod.quantity;
    }, 0);
    setTotalQuantity(totalQuantity);
  };

  const calcTotalPrice = () => {
    const totalPrice = cart.reduce((acc, prod) => {
      return acc + (parseInt(prod.price)*prod.quantity);
    }, 0);
    setTotal(totalPrice);

  };
  

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
