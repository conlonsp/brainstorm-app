import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
      }
    })
  }, [])

  // {!user ? <Login /> : <Home />}
  

  return (
    <div>
      <NavBar setUser={setUser} />
      {user ? <h1>Hi {user.username}</h1> : <h1>Please Sign Up or Log In</h1>}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup
          setUser={setUser}
        />}/>
        <Route path='/login' element={<Login
          setUser={setUser}
        />}/>
      </Routes>
      
    </div>
  )
}

export default App;
