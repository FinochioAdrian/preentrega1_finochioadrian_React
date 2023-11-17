import React from 'react'
import CartWidgets from '../CartWidgets/CartWidgets'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import DropdownMenuNav from '../DropdownMenuNav/DropdownMenuNav'
function NavBar() {
  return (
    <nav className='container-fluid d-flex justify-content-around align-items-center nav__container'>
      <h5 className='text-light'> <Link to={'/'} className='notStyleLink' style={{color:'white'}}>Web Design Ideas</Link></h5>
      <div className='d-flex gap-5'>

        <NavLink to={'/buildPage'}>
        <button className='nav__btn'>Nosotros</button>
        </NavLink>
        
        <DropdownMenuNav title={'Productos'} className='nav__btn'/>
        <NavLink to={'/buildPage'}>
        <button className='nav__btn'>Servicios</button>
        </NavLink>
        <NavLink to={'/buildPage'}>
        <button className='nav__btn'>Galería</button>
        </NavLink>
      </div>
      <CartWidgets />
    </nav>
    
    )
}

export default NavBar