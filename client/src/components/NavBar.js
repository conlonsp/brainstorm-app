import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
    </header>
  )
}

export default NavBar;