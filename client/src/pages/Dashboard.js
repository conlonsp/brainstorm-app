import React from 'react'
import { Grid, Typography } from '@mui/material';


function Dashboard({ user }) {
  return (
    <Grid container>
      <Grid item xs={4} marginTop={2}>
        <Typography variant='h4'>Welcome back, {user.username}!</Typography>
      </Grid>
    </Grid>
  )
}

export default Dashboard;