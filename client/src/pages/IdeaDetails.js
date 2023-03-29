import { Grid, Paper, Typography, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'

function IdeaDetails({ idea, loggedUser }) {
  const {id, title, content, likes, user} = idea

  console.log(user)

  const [comments, setComments] = useState([])

  let navigate = useNavigate()
  
  useEffect(() => {
    fetch(`ideas/${id}/comments`)
    .then(r => r.json())
    .then(comments => setComments(comments))
  }, [id])

  const paperStyle={
    marginTop: 20,
    padding: 10,
    height: 'auto',
  }

  return (
    <Grid>
      <Paper elevation={10} align='center' style={paperStyle}>
        <Typography variant='h5' sx={{ fontWeight: 'bold'}}>{title}</Typography>
        <Typography>{content}</Typography>
        {user ?
          <Typography>By: {user.username}</Typography>
        :
          null
        }
        {likes < 2 ?
          <Typography>{likes} like</Typography>
        :
          <Typography>{likes} likes</Typography>
        }
        {loggedUser.id === idea.user_id ?
          <Button onClick={() => navigate('/updateidea')}>Update</Button>
        :
          null
        }
        <Typography>Comments:</Typography>
        {comments.length > 0 ? comments.map(com => {
          return (
            <Comment key={com.id} com={com} />
          )
        })
          : 
          <Typography>No Comments Yet!</Typography>
        }
        <CommentForm
          comments={comments}
          setComments={setComments}
          idea={idea}
          loggedUser={loggedUser}
        />
        <Button onClick={() => {
          navigate('/idea board')
        }}>
          Back to Idea Board
        </Button>
      </Paper>
    </Grid>
  )
}

export default IdeaDetails