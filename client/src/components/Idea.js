import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Grid, Paper, Typography } from '@mui/material'

function Idea({ user, idea, onUpdateLikes, onIdeaDelete, onIdeaGrab }) {

  const { id, title, likes, user: ideaUser} = idea

  let navigate = useNavigate()

  function updateLikes() {
    const updateLikes = likes + 1
    fetch(`/ideas/${id}/likes`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateLikes)
    }).then(r => r.json())
    .then(updatedLikes => onUpdateLikes(updatedLikes))
  }

  function handleDelete() {
    fetch(`/ideas/${id}`, {
      method: 'DELETE',
    }).then(r => {
      if(r.ok) {
        onIdeaDelete(id)
      }
    })
  }

  function grabIdea() {
    onIdeaGrab(idea)
  }

  const paperStyle={
    padding: 20,
    height: 200,
    width: 500,
    margin: '20px auto',
  }

  
  return (
    <Paper align='center' elevation={10} style={paperStyle}>
      <Typography variant='h4'>{title}</Typography>
      <Typography variant='h8'>By: {ideaUser.username}</Typography>
      <br/>
      {user.id === idea.user.id ?
        <Button onClick={handleDelete}>Delete Idea</Button>
      :
        null
      }
      <br/>
      <Button onClick={() => {
        grabIdea()
        navigate('/ideadetails')
      }}>
        View More
      </Button>
      <br/>
      <span>
        {user.id !== idea.user.id ?
          <Button variant='text' size='small' onClick={updateLikes}>❤️</Button>
        : 
          'You have '
        }
        {likes} likes
      </span>
    </Paper>
  )
}

export default Idea