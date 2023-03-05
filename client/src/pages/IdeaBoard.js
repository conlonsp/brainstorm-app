import React, { useState, useEffect } from "react";
import Idea from '../components/Idea';

function IdeaBoard({ user }) {
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

  function handleLikes(updatedLikes) {
    const updatedLikesArr = ideas.map(idea => {
      return idea.id === updatedLikes.id ? updatedLikes : idea
    })
    setIdeas(updatedLikesArr)
  }

  console.log(errors)

  return (
    <div>
      <h1>Idea Board</h1>
      {user ?
        ideas.map(idea => {
          return (
            <Idea key={idea.id} idea={idea} onUpdateLikes={handleLikes}/>
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

