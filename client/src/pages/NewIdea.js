import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewIdea({ user, ideas, setIdeas }) {

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
          navigate('/ideaboard')
          
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title: </label>
        <br/>
        <input
          type='text'
          id='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br/>
        <label htmlFor='content'>Content: </label>
        <br/>
        <textarea
          rows='4'
          id='content'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <input
          type='hidden'
          id='user_id'
          value={user.id}
        />
        <br/>
        <button>Submit</button>
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