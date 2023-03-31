import { Grid, Typography } from '@mui/material'
import React from 'react'

function Comment({ com }) {

  return (
    <Grid sx={{ padding: '10px'}}>
      <Typography variant='h6' fontWeight='bold'>
        {com.user.username} says...
      </Typography>
      <Typography>"{com.content}"</Typography>
    </Grid>
  )
}

export default Comment