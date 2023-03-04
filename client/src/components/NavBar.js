import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({ user, setUser }) {

  function handleLogout() {
    fetch('/logout', { method: 'DELETE'}).then(r => {
      if(r.ok) {
        setUser(null)
      }
    })
  }

  return (
    <header>
      <div>
        <NavLink to='/'>Dashboard</NavLink>
        <NavLink to='/ideaboard'>Idea Board</NavLink>
      </div>
      {user ? <button onClick={handleLogout}>Logout</button> : null}
    </header>
  )
}

export default NavBar;