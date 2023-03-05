import React from 'react'

function newIdea() {

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