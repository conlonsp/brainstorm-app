import { Typography } from "@mui/material";
import React, { useContext } from "react";
import Idea from '../components/Idea';
import { UserContext } from "../components/App";

function IdeaBoard({ ideas, setIdeas, onIdeaGrab, errors }) {
  const user = useContext(UserContext)

  function handleLikes(updatedLikesIdea) {
    const updatedLikesArr = ideas.map(idea => {
      return idea.id === updatedLikesIdea.id ? updatedLikesIdea : idea
    })
    setIdeas(updatedLikesArr)
  }

  function handleDelete(id) {
    const updatedIdeaArr = ideas.filter(idea => idea.id !== id)
    setIdeas(updatedIdeaArr)
  }

  return (
    <div>
      <Typography variant='h3' align="center" fontFamily=''sx={{p: '10px'}}> Welcome to the Idea Board</Typography>
      {user ?
        ideas.map(idea => {
          return (
            <Idea
              key={idea.id}
              idea={idea}
              onUpdateLikes={handleLikes}
              onIdeaDelete={handleDelete}
              onIdeaGrab={onIdeaGrab}
            />
          )
        })
        :
        errors.map(err => {
          return (
            <p key={err}>{err}</p>
          )
        })
      }
    </div>
  )
}

export default IdeaBoard

