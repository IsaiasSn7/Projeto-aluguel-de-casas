import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Inicio from "./pages/inicio";
import Entrar from "./pages/Entrar";
import Cadastrar from "./pages/Cadastrar";
import HeaderLogado from "./components/HeaderLogado";
import HomeMobile from "./pages/HomeMobile";
import Imoveis from "./components/Imoveis";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Imoveis /> */}
      {/* <Inicio /> */}
      {/* <HomeMobile /> */}
      {/* <Entrar /> */}
      {/* <Cadastrar /> */}
      <HeaderLogado />
    </>
  );
}

export default App;
