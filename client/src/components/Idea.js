import React from 'react'
import { useNavigate } from 'react-router-dom'

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
  
  return (
    <div>
      <h1>{title}</h1>
      <p>By: {ideaUser.username}</p>
      <span>
        {user.id !== idea.user.id ? <button onClick={updateLikes}>❤️</button> : null}
        &nbsp;
        {likes} likes
      </span>
      <br/>
      {user.id === idea.user.id ? <button onClick={handleDelete}>Delete Idea</button> : null}
      <br/>
      <button onClick={() => {
        grabIdea()
        navigate('/ideadetails')}}>View More</button>
    </div>
  )
}

export default Idea