import React, { useState } from 'react';

function Login({ setUser, setLoggedIn }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

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
          setLoggedIn(true)
          setErrors([])
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <br/>
        <input
          type='text'
          id='username'
          autoComplete='off'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br/>
        <label htmlFor='password'>Password: </label>
        <br/>
        <input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br/>
        <button>Login</button>
      </form>
      {errors.map(err => {
        return (
          <h1 key={err}>{err}</h1>
        )
      })}
    </div>
  )
}

export default Login;