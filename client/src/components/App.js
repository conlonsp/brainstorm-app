import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Dashboard from '../pages/Dashboard';
import IdeaBoard from '../pages/IdeaBoard'
import LoginSignup from '../pages/LoginSignup';
import NewIdea from '../pages/NewIdea'
import IdeaDetails from '../pages/IdeaDetails';
import UpdateIdeaForm from './UpdateIdeaForm';
import NavBar from './NavBar'

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null)
  const [allIdeas, setAllIdeas] = useState([])
  const [idea, setIdea] = useState({})
  const [comments, setComments] = useState([])
  const [errors, setErrors] = useState([])
  const [userIdeas, setUserIdeas] = useState([])
  const [created, setCreated] = useState([])

  const pages = ['dashboard', 'idea board', 'new idea']

  const latestIdea = allIdeas[allIdeas.length - 1]
  
  useEffect(() => {
    fetch('/me').then(r => {
      if(r.ok) {
        r.json().then(user => {
          setUser(user)
          setUserIdeas(user.idea_comments)
          setCreated(user.created_ideas)
        })
      }
    })
  }, [])

  useEffect(() => {
    fetch('/ideas')
    .then(r => {
      if(r.ok) {
        r.json().then(data => setAllIdeas(data))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }, [])

  function grabIdeaDetails(idea) {
    fetch(`/ideas/${idea.id}`)
    .then(r => r.json())
    .then(idea => setIdea(idea))
  }

  function handleUpdateIdea(updatedIdea) {
    const updatedIdeas = allIdeas.map(idea => {
      if(idea.id === updatedIdea.id) {
        return updatedIdea
      } else {
        return idea
      }
    })
    setAllIdeas(updatedIdeas)
  }
  
  if(!user) return (
    <LoginSignup setUser={setUser} setUserIdeas={setUserIdeas}/>
  )

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Container>
        <br/>
        <NavBar pages={pages} setUserIdeas={setUserIdeas}/>
        <Routes>
          <Route path='/' element={
            <Dashboard
              // latestIdea={latestIdea}
              userIdeas={userIdeas}
              created={created}
            />
          }/>
          <Route path='/idea board' element={
            <IdeaBoard
              key={user.id}
              ideas={allIdeas}
              setIdeas={setAllIdeas}
              onIdeaGrab={grabIdeaDetails}
              errors={errors}
            />
          }/>
          <Route path='/new idea' element={
            <NewIdea
              ideas={allIdeas}
              setIdeas={setAllIdeas}
              setCreated={setCreated}
              created={created}
            />
          }/>
          <Route path='/ideadetails' element={
            <IdeaDetails
              key={idea.title}
              idea={idea}
              loggedUser={user}
              comments={comments}
              setComments={setComments}
              userIdeas={userIdeas}
              setUserIdeas={setUserIdeas}
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
    </UserContext.Provider>
  )
}

export default App;
