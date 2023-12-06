import React  from 'react';
import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if ((totalQuantity === 0)) {
    return (
      <Container fluid="md" className=" text-center ">
        <Row className="text-center" >
          <h1> No Hay items en el carrito</h1>
        </Row>
        <Row className="btn">
          <Link to={"/"} className="Cart_button">
            Productos
          </Link>
        </Row>
      </Container>
    );
  }

  return <Container fluid className=" d-flex flex-column align-items-center gap-3" >{
    cart.map(prod=><CartItem key={prod.id} {...prod} />)

}

    <h3>Total: ${total}</h3>
    <Button variant="warning" onClick={() =>clearCart() }> Limpiar carrito  </Button>
    <Link to="/checkout" className="Cart_button">Checkout</Link>
    
    </Container>;
};

export default Cart;
