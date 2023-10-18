import React from 'react'
import CartWidgets from '../CartWidgets/CartWidgets'
import './NavBar.css'
function NavBar() {
  return (
    <nav className='container-fluid d-flex justify-content-around align-items-center nav__container'>
      <h5 className='text-light'>Design Ideas Web</h5>
      <div className='d-flex gap-5'>
        <button className='nav__btn'>Nosotros</button>
        <button className='nav__btn'>Productos</button>
        <button className='nav__btn'>Servicios</button>
        <button className='nav__btn'>Galería</button>
      </div>
      <CartWidgets />
    </nav>
    
    )
}

export default NavBar