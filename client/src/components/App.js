import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import Signup from './Signup';
import IdeaBoard from './IdeaBoard'

function App() {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch('/me').then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
      }
    })
  }, [])

  console.log(loggedIn)
  

  return (
    <div>
      <NavBar
        user={user}
        setUser={setUser}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      {loggedIn ?
        <Routes>
          <Route path='/' element={<Dashboard
            user={user}
            setUser={setUser}
            setLoggedIn={setLoggedIn}
          />}/>
          <Route path='/signup' element={<Signup
            setUser={setUser}
            setLoggedIn={setLoggedIn}
          />}/>
          <Route path='/ideaboard' element={<IdeaBoard />}/>
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Dashboard
            user={user}
            setUser={setUser}
            setLoggedIn={setLoggedIn}
          />}/>
          <Route path='/signup' element={<Signup
            setUser={setUser}
            setLoggedIn={setLoggedIn}
          />}/>
        </Routes>
      } 
    </div>
  )
}

export default App;
