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
      <div>
        <h1>Update Idea Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            name='title'
            value={updatedIdea.title}
            onChange={handleChange}
          />
          <label htmlFor='content'>Content: </label>
          <textarea
            type='text'
            rows='4'
            name='content'
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
          <button>Submit Update</button>
        </form>
        {errors.map(err => {
          return (
            <p key={err}style={{color: 'red'}}>{err}</p>
          )
        })}
      </div>
      :
      <div>
        <h1>Update Submit Successful!</h1>
        <h3>Head back to the Idea Board</h3>
      </div>
      }
      <button onClick={() => {
        navigate('/ideaboard')
        setRendForm(false)
      }}>Back to Idea Board</button>
    </div>
  )
}

export default UpdateIdeaForm