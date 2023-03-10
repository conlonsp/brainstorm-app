import React from 'react'

function CommentForm() {

  return (
    <div>
      <form>
        <label htmlFor='content'>Leave a comment</label>
        <br/>
        <textarea
          type='text'
        />
        <input
          type='hidden'
        
        />
        <input
          type='hidden'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CommentForm