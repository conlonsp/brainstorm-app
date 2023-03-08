import React from 'react'

function Idea({ user, idea, onUpdateLikes, onIdeaDelete }) {

  const { id, title, likes, user: ideaUser} = idea

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
  
  return (
    <div>
      <h1>{title}</h1>
      <p>By: {ideaUser.username}</p>
      <h3>{likes} <button onClick={updateLikes}>❤️</button> </h3>
      {user.id === idea.user.id ? <button onClick={handleDelete}>X</button> : null}
      <button>View More</button>
    </div>
  )
}

export default Idea