import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({ setUser }) {

  function handleLogout() {
    fetch('/logout', { method: 'DELETE'}).then(r => {
      if(r.ok) {
        setUser(null);
      }
    })
  }

  return (
    <header>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </header>
  )
}

export default NavBar;