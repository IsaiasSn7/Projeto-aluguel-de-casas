import Sidebar from "../components/sidebar";

function HomeMobile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4 flex items-center">
        <Sidebar />
        <h1 className="text-xl font-semibold ml-4">Meu Site</h1>
      </header>

      <main className="p-4">
        <p>Conteúdo principal da página.</p>
      </main>
    </div>
  );
}

export default HomeMobile;
