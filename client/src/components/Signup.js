import React, { useState } from 'react'

function Signup({ setUser }) {
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        password,
        password_confirmation
      })
    })
  }

  return (
    <div>
      <form>
        <label>Username: </label>
        <input/>
        <label>Password: </label>
        <input/>
        <label>Password Confirmation: </label>
        <input/>
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup;