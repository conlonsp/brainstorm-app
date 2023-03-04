import React, { useState, useEffect } from "react";
import Idea from './Idea';

function IdeaBoard() {
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

  console.log(errors)

  return (
    <div>
      <h1>Idea Board</h1>
      { ?
        ideas.map(idea => {
          return (
            <Idea key={idea.id} idea={idea} />
          )
        })
        :
        errors.map(err => {
          return (
            <h1 key={err}>{err}</h1>
          )
        })
      }
    </div>
  )
}

export default IdeaBoard

