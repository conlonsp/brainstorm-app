import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function IdeaDetails({ idea }) {
  const {id, title, content, likes, user} = idea

  const [comments, setComments] = useState([])
  
  useEffect(() => {
    fetch(`/ideas/${idea.id}/comments`)
    .then(r => r.json())
    .then(comments => setComments(comments))
  }, [])

  const ideaComments = comments.filter(comment => comment.idea_id === idea.id)
  

  let navigate = useNavigate()

  return (
    <div>
      <h1>Idea Details</h1>
      <h2>{title}</h2>
      <p>{content}</p>
      {/* <h3>By: {user.username}</h3> */}
      {likes < 2 ? <h2>{likes} like</h2> : <h2>{likes} likes</h2>}
      <h2>Comments:</h2>
      {ideaComments.length > 0 ? ideaComments.map(com => {
        return (
          <li key={com.id}>{com.content}</li>
        )
      })
      : 
      <h3>No Comments Yet!</h3>
      }
      <button onClick={() => navigate('/ideaboard')}>
        Back to Idea Board
      </button>
    </div>
  )
}

export default IdeaDetails