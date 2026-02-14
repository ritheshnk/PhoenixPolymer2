import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Products from './Components/Products'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Products />
    </>
  )
}

export default App
