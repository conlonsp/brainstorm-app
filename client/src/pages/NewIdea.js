import React, { useState } from 'react'

function newIdea() {
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
        onChange={handleNewIdea}
      />
      <br/>
      <label htmlFor='content'>Content: </label>
      <br/>
      <textarea
        rows='4'
        id='content'
        value={content}
        onChange={handleNewIdea}
      />
    </form>
  )
}

export default newIdea