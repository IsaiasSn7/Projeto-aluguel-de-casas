import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Inicio from './pages/inicio'
import Entrar from './pages/Entrar'
import Cadastrar from './pages/Cadastrar'
import HeaderLogado from './components/HeaderLogado'
import HomeMobile from './pages/HomeMobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Inicio /> */}
      <HomeMobile />
      {/* <Entrar /> */}
      {/* <Cadastrar /> */}
      {/* <HeaderLogado /> */}
    </>
  )
}

export default App
