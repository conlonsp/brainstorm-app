import React from 'react'

function Idea({ idea }) {

  console.log(idea.user.username)

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