import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginForm from '../components/LoginForm';

function Dashboard({ user, setUser }) {
  return (
    <div>
      {!user ? 
        <div>
          <h1>Please Login or Signup</h1>
          <LoginForm
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