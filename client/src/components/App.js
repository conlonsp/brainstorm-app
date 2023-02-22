import React, { useState } from 'react';
import Login from './Login'
import Home from './Home';
import NavBar from './NavBar'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      <NavBar />
      <h1>App</h1>
    </div>
  )
}

export default App;
