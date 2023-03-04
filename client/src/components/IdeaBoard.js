import React, { useState, useEffect } from "react";
import Idea from './Idea';

function IdeaBoard({ loggedIn }) {
  const [ideas, setIdeas] = useState([])
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch('/ideas')
    .then(r => {
      if(r.ok) {
        r.json().then(data => setIdeas(data))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
      

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
        <h1 key={errors}>{errors}</h1>
      }
    </div>
  )
}

export default IdeaBoard

