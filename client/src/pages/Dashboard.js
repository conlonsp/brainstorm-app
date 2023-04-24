import React, { useState, useEffect } from 'react'
import { Grid, Typography, Paper, Avatar, Box } from '@mui/material';


function Dashboard({ user, latestIdea }) {

  const [allLikes, setAllLikes] = useState('')

  const {title, content, likes, user: ideaUser} = latestIdea

  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then(r => r.json())
    .then(data => setAllLikes(data))
  }, [])

  console.log(latestIdea)

  return (
    <Grid>
      <Paper elevation={10} sx={{height: '75vh', mt: 3, p: 3}}>
        <Typography align='center' variant='h4'>
          Welcome back, {user.username}!
        </Typography>
        <br/>
        <Grid item>
          <Typography align='center' variant='h6'>See how you rank!</Typography>
          <Paper elevation={5}  style={{padding: 10}}>
            <Grid align='center'>
              <Typography>Idea's Posted:</Typography>
              <Typography>{user.idea_count}</Typography>
            </Grid>
            <Grid align='center'>
              <Typography>Comment's Made:</Typography>
              <Typography>{user.comment_count}</Typography>
            </Grid>
            <Grid align='center'>
              <Typography>Total Likes:</Typography>
              <Typography>{allLikes}</Typography>
            </Grid>
            <Grid align='center'>
              <Typography>Your Biggest Collaborator:</Typography>
              <Typography>{user.biggest_collab}</Typography>
            </Grid>
          </Paper>
        </Grid>
        <br/>
        {user ?
          <Grid item>
            <Typography align='center' variant='h6'>
              Check out the latest idea!
            </Typography>
            <Paper elevation={5} style={{padding: 10}}>
              <Grid align='center'>
                <Box>
                  <Typography>
                    <Avatar src={ideaUser.avatar_url}/>
                    {ideaUser.username}
                  </Typography>
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

// "Welcome back, {user}" banner (CENTER)
//
// Box with user stats like: 
//  Overall number of likes, number of ideas posted
// (RIGHT)
//
// Box with newest idea posted
//
// Update bio or avatar_url