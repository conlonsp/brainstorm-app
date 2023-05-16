import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Dashboard from '../pages/Dashboard';
import IdeaBoard from '../pages/IdeaBoard'
import LoginSignup from '../pages/LoginSignup';
import NewIdea from '../pages/NewIdea'
import IdeaDetails from '../pages/IdeaDetails';
import UpdateIdeaForm from './UpdateIdeaForm';
import NavBar from './NavBar'

function App() {
  const [user, setUser] = useState(null)
  const [ideas, setIdeas] = useState([])
  const [idea, setIdea] = useState({})
  const pages = ['dashboard', 'idea board', 'new idea']
  const [comments, setComments] = useState([])
  const [errors, setErrors] = useState([])

  const latestIdea = ideas[ideas.length - 1]

  useEffect(() => {
    fetch('/me').then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/ideas')
    .then(r => {
      if(r.ok) {
        r.json().then(data => setIdeas(data))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }, [setIdeas])

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
      <br/>
      <NavBar pages={pages} setUser={setUser} user={user}/>
      <Routes>
        <Route path='/' element={
          <Dashboard
            user={user}
            latestIdea={latestIdea}
          />
        }/>
        <Route path='/idea board' element={
          <IdeaBoard
            user={user}
            ideas={ideas}
            setIdeas={setIdeas}
            onIdeaGrab={grabIdeaDetails}
            errors={errors}
          />
        }/>
        <Route path='/new idea' element={
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
            comments={comments}
            setComments={setComments}
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
