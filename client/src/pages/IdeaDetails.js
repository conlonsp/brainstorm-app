import React from 'react'

function IdeaDetails({ idea }) {

  return (
    <div>
      <h1>Idea Details</h1>
      {idea.title}
    </div>

  )
}

export default IdeaDetails