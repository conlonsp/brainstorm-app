import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NavBar from './NavBar';
import IdeaBoard from '../pages/IdeaBoard'
import LoginSignup from '../pages/LoginSignup';
import NewIdea from '../pages/NewIdea'

function App() {
  const [user, setUser] = useState(null)
  const [ideas, setIdeas] = useState([])

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
        <Route path='/' element={
          <Dashboard
            user={user}
            setUser={setUser}
          />
        }/>
        <Route path='/ideaboard' element={
          <IdeaBoard
            user={user}
            ideas={ideas}
            setIdeas={setIdeas}
          />
        }/>
        <Route path='/newidea' element={
          <NewIdea
            user={user}
            ideas={ideas}
            setIdeas={setIdeas}
          />
        }/>
      </Routes>
    </div>
  )
}

export default App;
