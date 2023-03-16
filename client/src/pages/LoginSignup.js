import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import { Grid, Paper, Button, Typography, Avatar } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function LoginSignup({ setUser }) {
  const [loginSwitch, setLoginSwitch] = useState(true)

  const paperStyle={padding: 20, height: '70vh', width: 280, margin: '20px auto'}
  const avatarStyle={backgroundColor: '#3CB371'}

  return (
    <div>
      {loginSwitch ? (
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
              <Typography>Sign In</Typography>
            </Grid>
            <LoginForm setUser={setUser}/>
            <Typography>
              Don't Have an Account?
              <Button onClick={() => setLoginSwitch(false)}>SignUp</Button>
            </Typography>
          </Paper>
        </Grid>
      ) : (
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
              <Typography>Sign Up</Typography>
            </Grid>
            <SignupForm setUser={setUser}/>
            <Typography>
              Don't Have an Account?
              <Button onClick={() => setLoginSwitch(true)}>SignUp</Button>
            </Typography>
          </Paper>
        </Grid>
      )
      }
    </div>
  )
}

export default LoginSignup