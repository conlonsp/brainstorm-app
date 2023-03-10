import React, { useState } from 'react'

function CommentForm({ comments, setComments, idea, loggedUser }) {

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   fetch()
  // }


  return (
    <div>
      <form>
        <label htmlFor='content'>Leave a comment</label>
        <br/>
        <textarea
          type='text'
          id='content'
          value={content}
        />
        <input
          type='hidden'
          id='user_id'
          value={loggedUser.id}
        />
        <input
          type='hidden'
          id='idea_id'
          value={idea.id}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CommentForm