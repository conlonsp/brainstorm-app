import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
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
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/signup' element={<Signup
          setUser={setUser}
        />}/>
      </Routes>
      
    </div>
  )
}

export default App;
