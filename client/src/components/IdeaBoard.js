import React, { useState, useEffect } from "react";
import Idea from './Idea';

function IdeaBoard() {
  const [ideas, setIdeas] = useState([])

  useEffect(() => {
    fetch('/ideas')
    .then(r => r.json())
    .then(data => setIdeas(data))
  }, [])

  return (
    <div>
      <h1>Idea Board</h1>
      {ideas.map(idea => {
        return (
          <Idea key={idea.id} idea={idea} />
        )
      })}
    </div>
  )
}

export default IdeaBoard