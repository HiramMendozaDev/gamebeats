import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavigationBar />
    </>
  )
}

export default App
