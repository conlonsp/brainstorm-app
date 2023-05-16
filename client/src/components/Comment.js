import { Grid, Typography, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

function Comment({ com, onUpdateComs }) {

  const {id, content, user_id, idea_id} = com

  const [input, setInput] = useState(false)

  const [updatedCom, setUpdatedCom] = useState({
    content: content,
    user_id: user_id,
    idea_id: idea_id
  })

  function handleChange(e) {
    setUpdatedCom({
      ...updatedCom,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const updated = {
      content: updatedCom.content,
      user_id: updatedCom.user_id,
      idea_id: updatedCom.idea_id
    }
    fetch(`/comments/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updated)
    }).then(r => {
      if(r.ok) {
        r.json().then(comment => {
          onUpdateComs(comment)
          setInput(false)
        })
      } else {
        r.json().then(err => {
          alert(err.errors)
        })
      }
    })
  }

  return (
    <div>
      {!input ?
        <Grid sx={{ padding: '10px'}}>
          <Typography variant='h6' fontWeight='bold'>
            {com.user.username} says...
          </Typography>
          <Typography>"{com.content}"</Typography>
          <Button onClick={() => setInput(true)}>Update</Button>
        </Grid>
      :
        <Grid sx={{ padding: '10px'}}>
          <Typography variant='h6' fontWeight='bold'>
            {com.user.username} says...
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              inputProps={{style: { textAlign: 'center' }}}
              variant='filled'
              fullWidth
              type='text'
              name='content'
              onChange={handleChange}
              value={updatedCom.content}
            />
            <input 
              type='hidden'
              name='user_id'
              value={updatedCom.user_id}
            />
            <input
              type='hidden'
              name='idea_id'
              value={updatedCom.idea_id}
            />
            <br/>
            <Button type='submit'>Submit</Button>
            <Button onClick={() => setInput(false)} color='error'>Close</Button>
          </form>
        </Grid>
      }
    </div>
  )
}

export default Comment