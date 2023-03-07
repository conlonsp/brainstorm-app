import React, { useState } from 'react';

function Login({ setUser }) {
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
          autoComplete='off'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br/>
        <button>Login</button>
      </form>
      {errors.map(err => {
        return (
          <p key={err} style={{color: 'red'}}>{err}</p>
        )
      })}
    </div>
  )
}

export default Login;