import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log("CartProvider cart",cart);
  
    const addItem = (item, quantity) => {
      console.log("CartProvider addItem( item, quantity )",item, quantity);
      console.log("CartProvider addItem() => item.id",item.id);
      console.log("CartProvider addItem() => isInCart(item.id) ", isInCart(item.id));
      if (!isInCart(item.id)) {
        setCart((prev) => [...prev, { item, quantity }]);
      } else {
        console.error("El producto ya fue agregado");
      }
    };
    const removeItem = (itemId)=> {
      const cartUpdate = cart.filter(prod=>prod.id!==itemId)
      setCart(cartUpdate)
    }
    const clearCart = () =>{
      setCart([])
   }
   const isInCart =(itemId)=>{
      return cart.some((prod => prod.item.id === itemId))
   }
  
   return (
      <CartContext.Provider value={{cart,addItem,removeItem,clearCart}}>{children}</CartContext.Provider>
   )
   
  };