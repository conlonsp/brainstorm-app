import { Grid, Paper, Typography, Button, List, Divider } from '@mui/material'
import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'
import { UserContext } from '../components/App'

function IdeaDetails({ idea, setComments, comments, userIdeas, setUserIdeas }) {
  const [user, setUser] = useContext(UserContext)
  const {id, title, content, likes, user: ideaOwner} = idea

  let navigate = useNavigate()
  
  useEffect(() => {
    fetch(`ideas/${id}/comments`)
    .then(r => r.json())
    .then(comments => setComments(comments))
  }, [id, setComments])

  function handleUpdateComs(comment) {
    const coms = comments.map(com => {
      if(com.id === comment.id) {
        return comment
      } else {
        return com
      }
    })
    setComments(coms)
  }

  function handleDeleteCom(id) {
    const updatedComs = comments.filter(com => com.id !== id)
    setComments(updatedComs)
  }

  const paperStyle={
    marginTop: 20,
    padding: 10,
    height: 'auto',
  }

  return (
    <Grid align='center'  sx={{ height: '400px' }}>
      <Paper elevation={10} align='center' style={paperStyle}>
        <Grid container direction='row' paddingTop='10px'>
          <Grid item sx={{ display: 'flex', mr: 'auto', justifyContent: 'flex-start'}}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', align: 'center'}}>{title}</Typography>
          </Grid>
          <Grid item sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          {user.id === idea.user_id ?
                <Button variant='contained' size='small' onClick={() => navigate('/updateidea')}>Update</Button>
              :
                null
              }
          </Grid>
        </Grid>
        <Grid container flexDirection='row'>
          <Grid item sx={{display: 'flex', justifyContent: 'flex-start'}}>
            {ideaOwner ?
              <Typography>By: {ideaOwner.username}</Typography>
            :
              null
            }
          </Grid>
        </Grid>
        <Grid container flexDirection='row'>
          <Grid item sx={{display: 'flex', justifyContent: 'flex-start'}}>
          <Typography>{likes} people liked this!</Typography>
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
              <Grid key={com.id}>
                <Divider/>
                <Comment
                  
                  com={com}
                  onUpdateComs={handleUpdateComs}
                  onDeleteCom={handleDeleteCom}
                />
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
          userIdeas={userIdeas}
          setUserIdeas={setUserIdeas}
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