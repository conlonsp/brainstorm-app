import React, { useEffect, useState } from 'react'

function Idea({ idea }) {
  const [likes, setLikes] = useState(0)

  // useEffect(() => {

  // }, [])

  // function updateLikes(e) {
  //   fetch('/ideas/:id/likes', {
  //     method: 'PATCH',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify()
  //   }).then(r => r.json())
  //   .then(data => console.log(data))
  // }

  return (
    <div>
      <h1>{idea.title}</h1>
      <h1>By: {idea.user.username}</h1>
      <p>{idea.content}</p>
      <h3>{idea.likes} <button>❤️</button> </h3>
    </div>
  )
}

export default Idea