import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'

function IdeaDetails({ idea, loggedUser }) {
  const {id, title, content, likes, user} = idea

  console.log(user)

  const [comments, setComments] = useState([])

  let navigate = useNavigate()
  
  useEffect(() => {
    fetch(`ideas/${id}/comments`)
    .then(r => r.json())
    .then(comments => setComments(comments))
  }, [id])

  return (
    <div>
      <h1>Idea Details</h1>
      <h2>{title}</h2>
      <p>{content}</p>
      {user ? <h3>By: {user.username}</h3> : null}
      {likes < 2 ? <h2>{likes} like</h2> : <h2>{likes} likes</h2>}
      <h2>Comments:</h2>
      {comments.length > 0 ? comments.map(com => {
        return (
          <Comment key={com.id} com={com} />
        )
      })
        : 
        <h3>No Comments Yet!</h3>
      }
      <CommentForm
        comments={comments}
        setComments={setComments}
        idea={idea}
        loggedUser={loggedUser}
      />
      <button onClick={() => {
        navigate('/ideaboard')
      }}>
        Back to Idea Board
      </button>
    </div>
  )
}

export default IdeaDetails