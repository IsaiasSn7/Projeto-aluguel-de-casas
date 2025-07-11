import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Inicio from './pages/inicio'
import Entrar from './pages/Entrar'
import Cadastrar from './pages/Cadastrar'
import Pesquisa from './pages/Pesquisa'
import HeaderLogado from './components/HeaderLogado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Inicio /> */}
      {/* <Entrar /> */}
      {/* <Cadastrar /> */}
      {/* <Pesquisa /> */}
      <HeaderLogado />
    </>
  )
}

export default App
