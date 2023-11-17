import React, { useContext } from 'react' 
import { Button, Card, Col, Row } from 'react-bootstrap'
import { CartContext } from "../../context/CartContext";
const CartItem = ({item,quantity}) => {
  const {removeItem} = useContext(CartContext)
  return (

    <Card>
    <Card.Body>
    <Row >
        
          <Col>
          Producto: {item.name}
          </Col>
          <Col>
          Price: {item.price}
          </Col>
          <Col>
          Cantidad: {quantity}
          </Col>
          <Col>
          Total: {item.price*quantity}
          </Col>
          <Col >
          <Button variant="danger" onClick={() => removeItem(item.id)}>
          <i class="bi bi-trash3"></i> Eliminar
          </Button>
          </Col >
          

      </Row>
    </Card.Body>
  </Card>


    
      

   
  )
}

export default CartItem