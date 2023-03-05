import React, { useState } from 'react'

function Signup({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [bio, setBio] = useState('')
  const [errors, setErrors] = useState([])
  
  
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
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <div>
      <h1>Signup Today!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <br/>
        <input
          type='text'
          id='username'
          value={username}
          autoComplete='off'
          onChange={e => setUsername(e.target.value)}
        />
        <br/>
        <label htmlFor='password'>Password: </label>
        <br/>
        <input
          type='password'
          id='password'
          value={password}
          autoComplete='current-password'
          onChange={e => setPassword(e.target.value)}
        />
        <br/>
        <label htmlFor='password_confirmation'>Password Confirmation: </label>
        <br/>
        <input
          type='password'
          id='password_confirmation'
          value={passwordConfirmation}
          autoComplete='current-password'
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        <br/>
        <label htmlFor='avatar_url'>Avatar URL: </label>
        <br/>
        <input
          type='text'
          id='avatar_url'
          value={avatarUrl}
          onChange={e => setAvatarUrl(e.target.value)}
        />
        <br/>
        <label htmlFor='bio'>Bio: </label>
        <br/>
        <textarea
          rows='4'
          id='bio'
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
        <br/>
        <button>Signup</button>
      </form>
      {errors.map(err => {
        return (
          <h1 key={err}>{err}</h1>
        )
      })}
    </div>
  )
}

export default Signup;