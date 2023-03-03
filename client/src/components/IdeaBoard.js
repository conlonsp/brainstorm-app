import React, { useState, useEffect } from "react";
import Idea from './Idea';

function IdeaBoard({ loggedIn }) {
  const [ideas, setIdeas] = useState([])

  useEffect(() => {
    fetch('/ideas')
    .then(r => r.json())
    .then(data => setIdeas(data))
  }, [])

  return (
    <div>
      <h1>Idea Board</h1>
      {loggedIn ?
        ideas.map(idea => {
          return (
            <Idea key={idea.id} idea={idea} />
          )
        })
        :
        <h1>Please Log In to View Ideas</h1>
      }
    </div>
  )
}

export default IdeaBoard

