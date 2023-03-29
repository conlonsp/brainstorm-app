import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'

function CommentForm({ comments, setComments, idea, loggedUser }) {

  const [content, setContent] = useState('')
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/comments', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        content,
        user_id: loggedUser.id,
        idea_id: idea.id
      })
    }).then(r => {
      if(r.ok) {
        r.json().then(newComment => {
          setComments([...comments, newComment])
          setContent('')
          setErrors([])
        })
      } else {
        r.json().then(err => {
          setErrors(err.errors)
        })
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type='text'
          placeholder='Leave a comment'
          id='content'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <input
          type='hidden'
          id='user_id'
          value={loggedUser.id}
        />
        <input
          type='hidden'
          id='idea_id'
          value={idea.id}
        />
        <br/>
        <Button type='submit'>Submit</Button>
        <br/>
      </form>
      {errors.map(err => {
        return (
          <p key={err}style={{color: 'red'}}>{err}</p>
        )
      })}
    </div>
  )
}

export default CommentForm