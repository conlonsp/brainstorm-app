import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, Tabs, Tab, Grid, Typography, Button, Avatar } from '@mui/material'
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import { UserContext } from './App';


function NavBar({ pages, setUserIdeas }) {
  const [user, setUser] = useContext(UserContext)

  const [value, setValue] = useState(0)

  function handleLogout() {
    fetch('/logout', { method: 'DELETE'}).then(r => {
      if(r.ok) {
        setUser(null)
        setUserIdeas([])
      }
    })
  }

  console.log(user)

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container >
          <Grid item xs={5}>
            <Tabs indicatorColor='primary' textColor='inherit' value={value} onChange={(e, val) => setValue(val)} >
              {pages.map((page, index) => {
                return (
                  <Tab key={index} label={page} component={Link} to={page === 'dashboard' ? '/' : `/${page}`}/>
                )
              })}
            </Tabs>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <ThunderstormOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                BRAINSTORM
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={2}>
            <Box display='flex'>
              
              <Button variant='contained' sx={{marginLeft: 'auto'}} onClick={handleLogout}>Logout</Button>
              <Avatar sx={{ marginLeft: 2}} src={`${user.avatar_url}`}/>
            </Box>
          </Grid>
        </Grid>  
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;