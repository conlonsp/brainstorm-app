import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Dashboard from '../pages/Dashboard';
import NavBar from './NavBar';
import IdeaBoard from '../pages/IdeaBoard'
import LoginSignup from '../pages/LoginSignup';
import NewIdea from '../pages/NewIdea'
import IdeaDetails from '../pages/IdeaDetails';
import UpdateIdeaForm from './UpdateIdeaForm';

function App() {
  const [user, setUser] = useState(null)
  const [ideas, setIdeas] = useState([])
  const [idea, setIdea] = useState({})

  useEffect(() => {
    fetch('/me').then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
      }
    })
  }, [])

  function grabIdeaDetails(idea) {
    fetch(`/ideas/${idea.id}`)
    .then(r => r.json())
    .then(idea => setIdea(idea))
  }

  function handleUpdateIdea(updatedIdea) {
    const updatedIdeas = ideas.map(idea => {
      if(idea.id === updatedIdea.id) {
        return updatedIdea
      } else {
        return idea
      }
    })
    setIdeas(updatedIdeas)
  }
  
  if(!user) return (
    
      <LoginSignup setUser={setUser} />
    
  )

  return (
    <Container>
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
            onIdeaGrab={grabIdeaDetails}
          />
        }/>
        <Route path='/newidea' element={
          <NewIdea
            user={user}
            ideas={ideas}
            setIdeas={setIdeas}
          />
        }/>
        <Route path='/ideadetails' element={
          <IdeaDetails
            idea={idea}
            loggedUser={user}
          />
        }/>
        <Route path='/updateidea' element={
          <UpdateIdeaForm
            idea={idea}
            onUpdateIdea={handleUpdateIdea}
          />
        }/>
      </Routes>
    </Container>
  )
}

export default App;
