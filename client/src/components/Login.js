import React, { useState } from 'react';

function Login({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
      } else {
        r.json().then(err => setErrors(err))
      }
    })
  }

  return (
    <h1>Login</h1>
  )
}

export default Login;