import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login';

function Home({ user }) {
  return (
    <div>
      <h1>Please Login or Signup</h1>
      <Login />
      <NavLink to='/signup'>Signup</NavLink>
    </div>
  )
}

export default Home;