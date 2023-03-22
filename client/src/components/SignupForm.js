import React, { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Signup({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [bio, setBio] = useState('')
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()
  
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        avatar_url: avatarUrl,
        bio
      }),
    }).then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
        setUsername('')
        setPassword('')
        setPasswordConfirmation('')
        setAvatarUrl('')
        setBio('')
        navigate('/dashboard')
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth required
          label='Create Username'
          placeholder='Username'
          variant='standard'
          id='username'
          value={username}
          autoComplete='off'
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          fullWidth required
          label='Create Password'
          placeholder='Password'
          variant='standard'
          type='password'
          id='password'
          value={password}
          autoComplete='current-password'
          onChange={e => setPassword(e.target.value)}
        />
        <TextField
          fullWidth required
          label='Confirm Password'
          placeholder='Re-enter Password'
          variant='standard'
          type='password'
          id='password_confirmation'
          value={passwordConfirmation}
          autoComplete='current-password'
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        <TextField
          fullWidth required
          label='Avatar URL'
          placeholder='Enter URL'
          variant='standard'
          type='text'
          id='avatar_url'
          value={avatarUrl}
          onChange={e => setAvatarUrl(e.target.value)}
        />
        <TextField
          fullWidth required
          label='Tell us about yourself'
          placeholder='Enter Bio'
          variant='standard'
          multiline
          rows='5'
          rowsMax='10'
          id='bio'
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
        <br/>
        <Button type='submit' fullWidth required>Sign Up</Button>
      </form>
      {errors.map(err => {
        return (
          <Typography key={err} style={{color: 'red'}}>{err}</Typography>
        )
      })}
    </div>
  )
}

export default Signup;