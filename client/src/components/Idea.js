import React from 'react'

function Idea({ idea, onUpdateLikes, onIdeaDelete }) {

  const { id, title, content, likes, user} = idea

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
      <h1>By: {user.username}</h1>
      <p>{content}</p>
      <h3>{likes} <button onClick={updateLikes}>❤️</button> </h3>
      <button onClick={handleDelete}>X</button>
    </div>
  )
}

export default Idea