import { useState } from 'react';

export default function SidebarDireita() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão de menu mobile */}
      <button
        className="flex items-center p-4 text-white bg-Roxo md:hidden"
        onClick={() => setIsOpen(true)}
      >
      <box-icon name='filter-alt' color='#ffffff' ></box-icon>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar vindo da direita */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            &times;
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-300">Início</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Sobre</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Serviços</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
