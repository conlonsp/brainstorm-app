import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Grid, Paper, Typography, IconButton } from '@mui/material'

function Idea({ idea, onUpdateLikes, onIdeaDelete, onIdeaGrab }) {

  const { id, title, likes, user: ideaUser} = idea
  
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false)
  const [isLikeDisabled, setIsLikeDisabled] = useState(false)

  let navigate = useNavigate()

  function updateLikes() {
    const updateLikes = likes + 1
    fetch(`/ideas/${id}/likes`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateLikes)
    }).then(r => {
      if (r.ok) {
        r.json().then(updatedLikes => onUpdateLikes(updatedLikes))
      } else {
        r.json().then(err => {
          alert(err.error)
          setIsLikeDisabled(true)
        })
      }
    })
      
  }

  function handleDelete() {
    fetch(`/ideas/${id}`, {
      method: 'DELETE',
    }).then(r => {
      if(r.ok) {
        onIdeaDelete(id)
      } else {
        r.json().then(err => {
          alert(err.error)
          setIsDeleteDisabled(true)
        })
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
    <Paper elevation={10} style={paperStyle}>
      <Grid container direction='column'>
        <Grid item display='flex' justifyContent='flex-start'>
          <Typography variant='h4'>{title}</Typography>
        </Grid>
        <Typography variant='h8'>By: {ideaUser.username}</Typography>
        <br/>
        <Grid item>
          {likes} liked this idea!
          <IconButton size='small' variant='contained' disabled={isLikeDisabled} onClick={updateLikes}>❤️</IconButton>
        </Grid>
      </Grid>
      <Grid container direction='row' paddingTop='50px'>
        <Grid item sx={{ display: 'flex', mr: 'auto', justifyContent: 'flex-start'}}>
          <Button variant='contained' onClick={() => {
            grabIdea()
            navigate('/ideadetails')
          }}>
            View More
          </Button>
        </Grid>
        <Grid item sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant='contained' disabled={isDeleteDisabled} color='error' onClick={handleDelete}>Delete Idea</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Idea

// Possible Reimplementation

  {/* {user.id !== idea.user.id ?
    <IconButton size='small' variant='contained' onClick={updateLikes}>❤️</IconButton>
  : 
    <IconButton disabled size='small' onClick={updateLikes}>♥️</IconButton>
  } */}

  {/* {user.id === idea.user.id ?
    <Button variant='contained' color='error' onClick={handleDelete}>Delete Idea</Button>
  :
    <Button disabled onClick={handleDelete}>Delete Idea</Button>
  } */}

