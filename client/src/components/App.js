import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NavBar from './NavBar';
import IdeaBoard from '../pages/IdeaBoard'
import LoginSignup from '../pages/LoginSignup';
import NewIdea from '../pages/NewIdea'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
      }
    })
  }, [])

  if(!user) return <LoginSignup setUser={setUser} />

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
        <Route path='/ideaboard' element={<IdeaBoard user={user}/>}/>
        <Route path='/newidea' element={<NewIdea user={user}/>} />
      </Routes>
    </div>
  )
}

export default App;
