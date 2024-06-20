import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Manager from './Components/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
   <Nav/>
   <Manager/>
   </>
  )
}

export default App
