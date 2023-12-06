import React, { useContext } from 'react' 
import { Button, Card, Col, Row } from 'react-bootstrap'
import { CartContext } from "../../context/CartContext";
const CartItem = ({id,name,price,quantity}) => {
  const {removeItem} = useContext(CartContext)
  return (

    <Card>
    <Card.Body>
    <Row >
        
          <Col>
          Producto: {name}
          </Col>
          <Col>
          Price: {price}
          </Col>
          <Col>
          Cantidad: {quantity}
          </Col>
          <Col>
          Total: {price*quantity}
          </Col>
          <Col >
          <Button variant="danger" onClick={() => removeItem(id)}>
          <i className="bi bi-trash3"></i> Eliminar
          </Button>
          </Col >
          

      </Row>
    </Card.Body>
  </Card>

   
  )
}

export default CartItem