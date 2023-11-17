import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  console.log("CartProvider cart", cart);

  const addItem = (item, quantity) => {
    console.log("CartProvider addItem( item, quantity )", item, quantity);
    console.log("CartProvider addItem() => item.id", item.id);
    console.log(
      "CartProvider addItem() => isInCart(item.id) ",
      isInCart(item.id)
    );
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };
  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.item.id !== itemId);
    setCart(cartUpdate);
  };
  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.item.id === itemId);
  };

  useEffect(() => {
    calcTotalQuantity();
    calcTotalPrice();
  }, [cart]);

  const calcTotalQuantity = () => {
    const totalQuantity = cart.reduce((acumulador, prod) => {
      return acumulador + prod.quantity;
    }, 0);
    console.log("totalQuantity =>", totalQuantity);
    setTotalQuantity(totalQuantity);
  };

  const calcTotalPrice = () => {
    const totalPrice = cart.reduce((acumulador, prod) => {
      return acumulador + (parseInt(prod.item.price)*prod.quantity);
    }, 0);
    console.log("totalPrice =>", totalPrice);
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
