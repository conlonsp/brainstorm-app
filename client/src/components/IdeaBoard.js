import React, { useState, useEffect } from "react";
import Idea from './Idea';

function IdeaBoard() {

  useEffect(() => {
    fetch('/ideas')
    .then(r => r.json())
    .then(data => setIdeas(data))
  }, [])

  return (
    <div>
      <h1>Idea Board</h1>
    </div>
  )
}

export default IdeaBoard