import React, { useState } from 'react'

function Signup({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
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
        password_confirmation: passwordConfirmation
      }),
    }).then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <input
          type='text'
          id='username'
          value={username}
          autoComplete='off'
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          id='password'
          value={password}
          autoComplete='current-password'
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor='password_confirmation'>Password Confirmation: </label>
        <input
          type='password'
          id='password_confirmation'
          value={passwordConfirmation}
          autoComplete='current-password'
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup;