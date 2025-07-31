import HeaderLogado from "../components/HeaderLogado";
import Imoveis from "../components/Imoveis";
import Sidebar from "../components/sidebar";
import SidebarDireita from "../components/SidebarDireita";

function HomeMobile() {
  return (
    <div className="min-h-screen">
      <header className="bg-Roxo flex items-center justify-between">
        <Sidebar />
        <HeaderLogado />
        <SidebarDireita />
      </header>
      <main>
        <Imoveis />
        <Imoveis />
        <Imoveis />
      </main>
    </div>
  );
}

export default HomeMobile;
