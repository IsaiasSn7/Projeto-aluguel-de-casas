import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Inicio from './pages/inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inicio />
    </>
  )
}

export default App
