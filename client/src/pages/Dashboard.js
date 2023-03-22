import React, { useState, useEffect } from 'react'
import { Grid, Typography, Paper } from '@mui/material';


function Dashboard({ user }) {

  const [likes, setLikes] = useState('')

  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then(r => r.json())
    .then(data => console.log(data))
  }, [])

  const numLikes = user.ideas.map(idea => idea.likes)

  const totalLikes = numLikes.reduce((total, currentVal) => total + currentVal)

  console.log(likes)

  console.log(numLikes)
  console.log(totalLikes)

  return (
    <Grid container>
      <Grid item xs={4} marginTop={2}>
        <Typography variant='h4'>Welcome back, {user.username}!</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography align='center' variant='h6'>See how you rank!</Typography>
        <Paper elevation={5}>
          <Grid align='center'>
            <Typography>Total Ideas</Typography>
            <Typography>{user.ideas.length}</Typography>
          </Grid>
          <Grid align='center'>
            <Typography>Total Likes</Typography>
            <Typography>{totalLikes}</Typography>
          </Grid>
        </Paper>
      </Grid>
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