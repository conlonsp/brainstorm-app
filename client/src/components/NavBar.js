import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, Tabs, Tab, Grid, Typography, Button, Avatar } from '@mui/material'
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';

function NavBar({ pages, setUser, user }) {

  const [value, setValue] = useState(0)

  function handleLogout() {
    fetch('/logout', { method: 'DELETE'}).then(r => {
      if(r.ok) {
        setUser(null)
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
                  <Tab key={index} label={page} component={Link} to={`/${page}`}/>
                )
              })}
            </Tabs>
          </Grid>
          <Grid item xs={3}>
            <Box xs={2}>
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
          <Grid xs={2}/>
          <Grid xs={2}>
            <Box display='flex'>
              
              <Button variant='contained' sx={{marginLeft: 'auto'}} onClick={handleLogout}>Logout</Button>
              <Avatar sx={{ marginLeft: 2}} src={`${user.avatar_url}`}/>
            </Box>
          </Grid>
        </Grid>  
      </Toolbar>
    </AppBar>
    // <AppBar>
    //   <Toolbar disableGutters>
    //     <Grid container direction='row'>
    //       <Grid item xs={4} md={12}>
    //         <ThunderstormOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
    //         <Typography
    //           variant="h6"
    //           noWrap
    //           component="a"
    //           href="/"
    //           sx={{
    //             mr: 2,
    //             display: { xs: 'none', md: 'flex' },
    //             fontFamily: 'monospace',
    //             fontWeight: 700,
    //             letterSpacing: '.3rem',
    //             color: 'inherit',
    //             textDecoration: 'none',
    //           }}
    //         >
    //           BRAINSTORM
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={5}>
    //         <Tabs
    //           indicatorColor='secondary'
    //           textColor='inherit'
    //         >
    //           <Tab label='Dashboard' />
    //           <Tab label='Idea Board'/>
    //           <Tab label='New Idea' />
    //         </Tabs>
    //       </Grid>
    //     </Grid>
    //     <img src={Logo} height={25} width={25}/>
    //   </Toolbar>
    // </AppBar>
  )
}

export default NavBar;

{/* <NavLink to='/'>Dashboard</NavLink>
<NavLink to='/ideaboard'>Idea Board</NavLink>
<NavLink to='/newidea'>New Idea</NavLink>
{user ? <Button onClick={handleLogout}>Logout</Button> : null} */}