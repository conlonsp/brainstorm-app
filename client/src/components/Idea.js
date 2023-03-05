import React from 'react'

function Idea({ idea }) {

  return (
    <div>
      <h1>{idea.title}</h1>
      <h1>By: {idea.user.username}</h1>
      <p>{idea.content}</p>
      <h3>{idea.likes}</h3>
    </div>
  )
}

export default Idea