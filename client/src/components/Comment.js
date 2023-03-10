import React from 'react'

function Comment({ com }) {

  return (
    <div>
      <h4>{com.user.username} says...</h4>
      <p>{com.content}</p>
    </div>
  )
}

export default Comment