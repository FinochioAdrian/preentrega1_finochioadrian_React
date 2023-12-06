import React  from 'react';
import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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

  return <Container fluid className=" d-flex gap-5 py-3" >
    <Col md={8}>
    {
    cart.map(prod=> <Row key={prod.id} className='my-2'><CartItem  {...prod} /> </Row> )

} <Row className='justify-content-center my-3'>
  <Col md={6} >
  <Button  style={{'backgroundColor':"#FF9209" , "border":"none"}} onClick={() =>clearCart() }> Limpiar carrito  </Button>  </Col>
        </Row>
  </Col>
    <Col md={3} >
    <Card>
      <Card.Body className='d-flex flex-column justify-content-center align-content-center'>
        <Card.Title>Total: ${total}</Card.Title>
        
    
        <Row className="my-1" >
           <Link to={"/all"} className="ItemDetail_button__finished">
            {" "}
            Seguir Comprando
          </Link>
        </Row>
        <Row  >

          <Link to="/checkout" className="Cart_button btn-success">Finalizar Compra</Link>

          </Row></Card.Body></Card>
    
    
    </Col>

    
    </Container>;
};

export default Cart;
