import { useState } from "react";
import logo from "../img/Logo-chave-certa.png";
import user from "../img/user.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão de menu mobile */}
      <button
        className="bg-Roxo flex items-center p-4 text-white md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <box-icon name="menu" color="#ffffff"></box-icon>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-white text-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="bg-Roxo flex items-center justify-between border-b p-4">
          <img src={logo} alt="" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-Laranja text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="flex items-center gap-[20px] p-4 font-bold">
          <img className="w-[60px] rounded-full" src={user} alt="" />
          <h1 className="text-Laranja text-[20px]">Isaias Sousa</h1>
        </div>
        <nav className="p-4">
          <ul className="text-Roxo space-y-4">
            <li>
              <a href="#" className="flex items-center gap-[4px] hover:text-gray-300">
              <box-icon name="heart" color="#2b0464"></box-icon>
                Favoritos
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-[4px] hover:text-gray-300">
              <box-icon name='log-out' color='#2b0464' ></box-icon>
                Sair
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
