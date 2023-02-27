import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login';

function Home({ user }) {
  return (
    <div>
      {!user ? 
        <div>
          <h1>Please Login or Signup</h1>
          <Login />
          <NavLink to='/signup'>Signup</NavLink>
        </div>
        :
        <h1>Welcome {user.username}</h1>
      }
    </div>
  )
}

export default Home;