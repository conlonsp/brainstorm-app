import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';


function Login({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then(r => {
      if(r.ok) {
        r.json().then(user =>{
          setUser(user)
          setErrors([])
          navigate('/')
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant='standard'
          label='Username'
          placeholder='Enter Username'
          id='username'
          autoComplete='off'
          value={username}
          onChange={e => setUsername(e.target.value)}
          fullWidth required
        />
        <TextField
          variant='standard'
          label='Password'
          placeholder='Enter Password'
          type='password'
          id='password'
          autoComplete='off'
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth required
        />
        <br/>
        <Button type='submit' align='center' fullWidth required>Log In</Button>
      </form>
      {errors.map(err => {
        return (
          <Typography key={err} style={{color: 'red'}}>{err}</Typography>
        )
      })}
    </div>
  )
}

export default Login;