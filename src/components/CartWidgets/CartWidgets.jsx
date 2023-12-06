import React, { useContext, useState } from 'react'
import './CartWidgets.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


function CartWidgets() {

  const [showCardCart, setShowCardCart] = useState(false)
  

  const {totalQuantity,cart} = useContext(CartContext)
  const mostrarTarjeta  = (e) =>{
    setShowCardCart(true)
  }
  const ocultarTarjeta  = (e) =>{
    setShowCardCart(false)
  }


  return (
    <>
  
    <Link onMouseEnter={mostrarTarjeta} onMouseLeave={ocultarTarjeta} to={'/cart'} className="cartWidgets__container"  style={{display: totalQuantity>0?'block':'none'}}>
        <i className="bi bi-cart3 cartWidgets__icon"></i>
        <span className='cartWidgets__number'> {totalQuantity}</span>
       
    </Link>
    
    <div className='cart_cardFloat' style={!showCardCart?{'display':'none'}:{'display':'flex'}}>
    { cart.map(({id,name,price,quantity,img} ) => { 
      
           
      return <Card key={id} className=''>
    <Card.Img variant="top" src={img} className='cart_cardFloat_img' />
     <Card.Body>
      {name} {price} {quantity} total: ${quantity*price}
      
      </Card.Body>
      
    
    </Card>

  
  
  
  
  })}
    </div>
   {/*   */}

    </>
      
           
       
    
  )
}

export default CartWidgets