import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function LoginSignup({ setUser }) {
  const [loginSwitch, setLoginSwitch] = useState(true)

  return (
    <div>
      {loginSwitch ? (
        <>
          <LoginForm setUser={setUser}/>
          <p>
            Don't Have an Account?
            <button onClick={() => setLoginSwitch(false)}>SignUp</button>
          </p>
        </>
      ) : (
        <>
          <SignupForm setUser={setUser}/>
          <p>
            Already Have an Account?
            <button onClick={() => setLoginSwitch(true)}>Login</button>
          </p>
        </>
      )
      }
    </div>
  )
}

export default LoginSignup