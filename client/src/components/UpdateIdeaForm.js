import { Paper, TextField, Typography, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UpdateIdeaForm({ idea, onUpdateIdea }) {

  const {id, title, content, likes, user_id: userId} = idea

  const [updatedIdea, setUpdatedIdea] = useState({
    title: title,
    content: content,
    likes: likes,
    user_id: userId
  })
  const [errors, setErrors] = useState([])
  const [rendForm, setRendForm] = useState(false)

  let navigate = useNavigate()

  function handleChange(e) {
    setUpdatedIdea({
      ...updatedIdea,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const updated = {
      title: updatedIdea.title,
      content: updatedIdea.content,
      likes: updatedIdea.likes,
      user_id: updatedIdea.user_id
    }
    fetch(`/ideas/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updated)
    }).then(r => {
      if(r.ok) {
        r.json().then(idea => {
          onUpdateIdea(idea)
          setRendForm(true)
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <div>
      {!rendForm ?
      <Paper elevation={10} sx={{p: 3}}>
        <Typography sx={{p: 2, mb: 2}} variant='h4'>Update Idea #{id}</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{p: 3}}
            fullWidth required
            type='text'
            name='title'
            label='Title'
            value={updatedIdea.title}
            onChange={handleChange}
          />
          <Grid xs={2}></Grid>
          <TextField
            sx={{p: 3}}
            fullWidth required
            type='text'
            rows='4'
            name='content'
            label='Content'
            value={updatedIdea.content}
            onChange={handleChange}
          />
          <input
            type='hidden'
            name='likes'
            value={updatedIdea.likes}
          />
          <input
            type='hidden'
            name='user_id'
            value={updatedIdea.user_id}
          />
          <Button type='submit'>Submit Update</Button>
        </form>
        {errors.map(err => {
          return (
            <p key={err}style={{color: 'red'}}>{err}</p>
          )
        })}
      </Paper>
      :
      <div>
        <h1>Update Submit Successful!</h1>
        <h3>Head back to the Idea Board</h3>
      </div>
      }
      <br/>
      <Button variant='contained' sx={{p: 2, ml: 'auto'}} onClick={() => {
        navigate('/idea board')
        setRendForm(false)
      }}>Back to Idea Board</Button>
    </div>
  )
}

export default UpdateIdeaForm