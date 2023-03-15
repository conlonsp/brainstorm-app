import React from 'react'
import { useNavigate } from 'react-router-dom'

function UpdateIdeaForm() {

  let navigate = useNavigate()

  return (
    <div>
      <h1>Update Idea Form</h1>
      <form>
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
        />
        <label htmlFor='content'>Content: </label>
        <textarea
          type='text'
        />
        <input

        />
        <input
        
        />
      </form>
      <button onClick={() => navigate('/ideaboard')}>Back to Idea Board</button>
    </div>
  )
}

export default UpdateIdeaForm