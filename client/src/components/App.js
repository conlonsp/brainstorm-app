import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import Signup from './Signup';
import IdeaBoard from './IdeaBoard'

function App() {
  const [user, setUser] = useState(null)
  // const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch('/me').then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
      }
    })
  }, [])

  

  return (
    <div>
      <NavBar
        user={user}
        setUser={setUser}
      />
        <Routes>
          <Route path='/' element={<Dashboard
            user={user}
            setUser={setUser}
          />}/>
          <Route path='/signup' element={<Signup
            setUser={setUser}
          />}/>
          <Route path='/ideaboard' element={<IdeaBoard user={user}/>}/>
        </Routes>
    </div>
  )
}

export default App;
