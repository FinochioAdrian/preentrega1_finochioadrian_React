import React, { useContext } from 'react' 
import { Button, Card, Col, Row } from 'react-bootstrap'
import { CartContext } from "../../context/CartContext";
import './CartItem.css'

const CartItem = ({id,name,price,quantity,img}) => {
  const {removeItem} = useContext(CartContext)
  return (

    <Card>
    <Card.Body>
    <Row >
        
          <Col > <img className='cardCart_img' src={img} alt={name} /></Col>
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