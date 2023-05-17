import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Typography, Button, Grid, Paper } from '@mui/material'
import { UserContext } from '../components/App'

function NewIdea({ ideas, setIdeas }) {
  const user = useContext(UserContext)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [errors, setErrors] = useState([])

  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/ideas', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title,
        content,
        user_id: user.id
      })
    }).then(r => {
      if(r.ok) {
        r.json().then(newIdea => {
          setIdeas([...ideas, newIdea])
          setTitle('')
          setContent('')
          navigate('/idea board')
          
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  const paperStyle={
    padding: 30,
    height: '25vh',
    width: 380,
    margin: '20px auto',
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Typography align='center' variant='h5'>Post a New Idea</Typography>
            <TextField
              fullWidth required
              label='Title'
              placeholder="What's your idea?"
              variant='standard'
              type='text'
              id='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <TextField
              fullWidth required
              label='Content'
              placeholder="What's it all about?"
              variant='standard'
              multiline
              rows='5'
              // rowsMax='10'
              id='content'
              value={content}
              onChange={e => setContent(e.target.value)}
            />
            <input
              type='hidden'
              id='user_id'
              value={user.id}
            />
            
            <Button sx={{mt: 1}} variant='contained' type='submit' fullWidth required>Post Idea</Button>
          </Paper>
        </Grid>
      </form>
      {errors.map(err => {
        return (
          <p key={err} style={{color: 'red'}}>{err}</p>
        )
      })}
    </div>
  )
}

export default NewIdea