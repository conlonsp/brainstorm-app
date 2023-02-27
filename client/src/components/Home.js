import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login';

function Home({ user, setUser }) {
  return (
    <div>
      {!user ? 
        <div>
          <h1>Please Login or Signup</h1>
          <Login setUser={setUser} />
          <button id='signup'><NavLink to='/signup'>Signup</NavLink></button>
        </div>
        :
        <h1>Welcome {user.username}</h1>
      }
    </div>
  )
}

export default Home;