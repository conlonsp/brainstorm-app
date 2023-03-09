import React from 'react'
import { useNavigate } from 'react-router-dom'

function IdeaDetails({ idea }) {
  const {title, content, likes, user, comments} = idea

  let navigate = useNavigate()

  
  

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
          <li key={com.id}>{com.content}</li>
        )
      })
      : 
      <h2>No Comments Yet!</h2>
      }
      <button onClick={() => navigate('/ideaboard')}>
        Back to Idea Board
      </button>
    </div>
  )
}

export default IdeaDetails

// {
//   "id": 2,
//   "title": "Super Fetch Machine",
//   "content": "Machine that doesn't stop playing fetch with me like Sam does.",
//   "likes": 0,
//   "user": {
//       "id": 2,
//       "username": "lacroix",
//       "bio": "Drink me.",
//       "avatar_url": "https://www.google.com/search?q=random+image&oq=random&aqs=chrome.1.69i57j69i59j0i131i433i512j0i433i512l2j0i131i433i512l2j69i61.2225j0j7&sourceid=chrome&ie=UTF-8#imgrc=jsbCYSW7o-fL-M",
//       "password_digest": "$2a$12$2YHvc0z0FAgpdQK6TiC0cewEYnmsqA8ORi0vuzkQMkgOsOX8xrJvG",
//       "created_at": "2023-03-08T22:44:05.131Z",
//       "updated_at": "2023-03-08T22:44:05.131Z"
//   },
//   "comments": [
//       {
//           "id": 4,
//           "content": "Aspernatur provident ad error ducimus quam est sapiente sit facere.",
//           "user_id": 2,
//           "idea_id": 2,
//           "created_at": "2023-03-08T22:44:06.120Z",
//           "updated_at": "2023-03-08T22:44:06.120Z"
//       },