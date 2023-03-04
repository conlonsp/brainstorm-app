import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login';

function Dashboard({ user, setUser }) {
  return (
    <div>
      { ? 
        <div>
          <h1>Please Login or Signup</h1>
          <Login
            setUser={setUser}
          />
          <button id='signup'><NavLink to='/signup'>Signup</NavLink></button>
        </div>
        :
        <h1>Welcome {user.username}</h1>
      }
    </div>
  )
}

export default Dashboard;