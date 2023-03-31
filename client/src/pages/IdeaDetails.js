import { Grid, Paper, Typography, Button, List, Divider } from '@mui/material'
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
    <Grid align='center' sx={{ height: '400px' }}>
      <Paper elevation={10} align='center' style={paperStyle}>
        <Grid container direction='row' paddingTop='10px'>
          <Grid item sx={{ display: 'flex', mr: 'auto', justifyContent: 'flex-start'}}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', align: 'center'}}>{title}</Typography>
          </Grid>
          <Grid item sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          {loggedUser.id === idea.user_id ?
                <Button variant='contained' size='small' onClick={() => navigate('/updateidea')}>Update</Button>
              :
                null
              }
          </Grid>
        </Grid>
        <Grid container flexDirection='row'>
          <Grid item sx={{display: 'flex', justifyContent: 'flex-start'}}>
            {user ?
              <Typography>By: {user.username}</Typography>
            :
              null
            }
          </Grid>
        </Grid>
        <Grid container flexDirection='row'>
          <Grid item sx={{display: 'flex', justifyContent: 'flex-start'}}>
            {likes < 2 ?
              <Typography>{likes} like</Typography>
            :
              <Typography>{likes} likes</Typography>
            }
          </Grid>
        </Grid>
        <Typography>"{content}"</Typography>
        <br/>
        <Typography variant='h5'>Comments:</Typography>
        <br/>
        <Paper elevation={5} sx={{ maxHeight: '300px', width: '75%', overflow: 'auto'}}>
          <List>
          {comments.length > 0 ? comments.map(com => {
            return (
              <Grid>
                <Divider/>
                <Comment key={com.id} com={com} />
                <Divider/>
              </Grid>
            )
          })
            : 
              <Typography>No Comments Yet!</Typography>
          }
          </List>
        </Paper>
        <CommentForm
          comments={comments}
          setComments={setComments}
          idea={idea}
          loggedUser={loggedUser}
        />
        <br/>
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