import React, { useState } from 'react'

function NewIdea() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  

  return (
    <form>
      <label htmlFor='title'>Title: </label>
      <br/>
      <input
        type='text'
        id='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br/>
      <label htmlFor='content'>Content: </label>
      <br/>
      <textarea
        rows='4'
        id='content'
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <input
        // type='hidden'
        id='user_id'
        value={user.id}
      />
      {/* <input
        // type='hidden'
      /> */}
      <button>Submit</button>
    </form>
  )
}

export default NewIdea