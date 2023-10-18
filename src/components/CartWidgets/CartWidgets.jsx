import React from 'react'
import './CartWidgets.css'


function CartWidgets() {
  return (
    <div className="cartWidgets__container" >
        <i className="bi bi-cart3 cartWidgets__icon"></i>
        <span className='cartWidgets__number'> 0</span>
       
    </div>
  )
}

export default CartWidgets