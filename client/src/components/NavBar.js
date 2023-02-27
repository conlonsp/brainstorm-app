import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({ user, setUser, setLoggedIn, loggedIn }) {

  function handleLogout() {
    fetch('/logout', { method: 'DELETE'}).then(r => {
      if(r.ok) {
        setUser(null)
        setLoggedIn(false)
      }
    })
  }

  return (
    <header>
      <div>
        {loggedIn ?
          <>
            <NavLink to='/'>Dashboard</NavLink>
            <NavLink to='/ideaboard'>Idea Board</NavLink>
          </>
          :
          <>
            <NavLink to='/'>Dashboard</NavLink>
          </>
        }
      </div>
      {user ? <button onClick={handleLogout}>Logout</button> : null}
    </header>
  )
}

export default NavBar;