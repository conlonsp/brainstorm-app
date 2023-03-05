import React from 'react'

function Idea({ idea, onUpdateLikes }) {

  function updateLikes() {
    const updateLikes = idea.likes + 1
    fetch(`/ideas/${idea.id}/likes`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateLikes)
    }).then(r => r.json())
    .then(updatedLikes => onUpdateLikes(updatedLikes))
  }

  return (
    <div>
      <h1>{idea.title}</h1>
      <h1>By: {idea.user.username}</h1>
      <p>{idea.content}</p>
      <h3>{idea.likes} <button onClick={updateLikes}>❤️</button> </h3>
    </div>
  )
}

export default Idea