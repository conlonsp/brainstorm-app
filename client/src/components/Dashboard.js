import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login';

function Dashboard({ user, setUser, loggedIn, setLoggedIn }) {
  return (
    <div>
      {!user ? 
        <div>
          <h1>Please Login or Signup</h1>
          <Login setUser={setUser} setLoggedIn={setLoggedIn}/>
          <button id='signup'><NavLink to='/signup'>Signup</NavLink></button>
        </div>
        :
        <h1>Welcome {user.username}</h1>
      }
    </div>
  )
}

export default Dashboard;