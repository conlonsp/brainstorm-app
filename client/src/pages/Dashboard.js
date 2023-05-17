import React, { useState, useEffect, useContext } from 'react'
import { Grid, Typography, Paper, Avatar, Box } from '@mui/material';
import { UserContext } from '../components/App';


function Dashboard({ latestIdea, userIdeas }) {

  const [allLikes, setAllLikes] = useState('')

  const [user, setUser] = useContext(UserContext)

  const {username, biggest_collab, created_ideas: createdIdeas} = user

  const {title, content, likes, user: ideaUser} = latestIdea
  
  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then(r => r.json())
    .then(data => setAllLikes(data))
  }, [user.id])

  let lastFive = userIdeas.slice(-5)
  console.log(lastFive)

  return (
    <Grid>
      <Paper elevation={10} sx={{height: '75vh', mt: 3, p: 3}}>
        <Typography align='center' variant='h4'>
          Welcome back, {username}!
        </Typography>
        <br/>
        <Grid item>
          <Typography align='center' variant='h6'>See how you rank!</Typography>
          <Paper elevation={5}  style={{padding: 10}}>
            <Grid align='center'>
              <Typography>Idea's Posted:</Typography>
              <Typography>{createdIdeas.length}</Typography>
            </Grid>
            <Grid align='center'>
              <Typography>Comment's Made:</Typography>
              <Typography>{userIdeas.length}</Typography>
            </Grid>
            <Grid align='center'>
              <Typography>Total Likes:</Typography>
              <Typography>{allLikes}</Typography>
            </Grid>
            <Grid align='center'>
              <Typography>Your Biggest Collaborator:</Typography>
              {biggest_collab ? 
                <Typography>{biggest_collab}</Typography>
              :
                <Typography color={'red'}>Start collaborating to view data!</Typography>
              }
            </Grid>
          </Paper>
        </Grid>
        <br/>
        <Grid>
          <Typography variant='h6' sx={{textAlign: 'center'}}>Last 5 Idea's you've commented on:</Typography>
          <Paper elevation={5}  style={{padding: 10}}>
            {lastFive.map(ui => {
              return (
                <li>
                  <p>{ui.idea_title}</p>
                  <p>{ui.comment_content}</p>
                </li>
              )
            })}
          </Paper>
        </Grid>
        <br/>
        {latestIdea ?
          <Grid item>
            <Typography align='center' variant='h6'>
              Check out the latest idea!
            </Typography>
            <Paper elevation={5} style={{padding: 10}}>
              <Grid align='center'>
                <Box>
                  {/* <Typography> */}
                    <Avatar src={ideaUser.avatar_url}/>
                    {ideaUser.username}
                  {/* </Typography> */}
                </Box>
                <Typography variant='h5'>{title}</Typography>
                <Typography>"{content}"</Typography>
                <Typography>{likes} likes</Typography>
              </Grid>
            </Paper>
          </Grid>
        :
          null
        }
      </Paper>
    </Grid>
    
  )
}

export default Dashboard;