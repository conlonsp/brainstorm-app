import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login';

function Home() {
  return (
    <div>
      <Login />
      <NavLink to='/signup'>Signup</NavLink>
    </div>
  )
}

export default Home;