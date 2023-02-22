import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App;
