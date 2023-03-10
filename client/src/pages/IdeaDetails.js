import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function IdeaDetails({ idea }) {
  const {id, title, content, likes, user} = idea

  const [comments, setComments] = useState([])
  // const [users, setUsers] = useState([])

  let navigate = useNavigate()
  
  useEffect(() => {
    fetch(`ideas/${id}/comments`)
    .then(r => r.json())
    .then(comments => setComments(comments))
  }, [id])

  // useEffect(() => {
  //   fetch(`/users`)
  //   .then(r => r.json())
  //   .then(users => setUsers(users))
  // }, [])

  console.log(user)

  return (
    <div>
      <h1>Idea Details</h1>
      <h2>{title}</h2>
      <p>{content}</p>
      <h3>By: {user.username}</h3>
      {likes < 2 ? <h2>{likes} like</h2> : <h2>{likes} likes</h2>}
      <h2>Comments:</h2>
      {comments.length > 0 ? comments.map(com => {
        return (
          <div key={com.id}>
            <h4>{com.user.username} says...</h4>
            <p>{com.content}</p>
          </div>
        )
      })
      : 
      <h3>No Comments Yet!</h3>
      }
      <button onClick={() => {
        navigate('/ideaboard')
      }}>
        Back to Idea Board
      </button>
    </div>
  )
}

export default IdeaDetails