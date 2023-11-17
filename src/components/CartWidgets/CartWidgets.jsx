import React, { useContext } from 'react'
import './CartWidgets.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


function CartWidgets() {

  const {totalQuantity} = useContext(CartContext)

  return (
    
      <Link to={'/cart'} className="cartWidgets__container"  style={{display: totalQuantity>0?'block':'none'}}>
        <i className="bi bi-cart3 cartWidgets__icon"></i>
        <span className='cartWidgets__number'> {totalQuantity}</span>
      </Link>
           
       
    
  )
}

export default CartWidgets