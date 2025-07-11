import { useState } from "react";
import logoBranca from "../img/logo-branca.png";

const Cadastrar = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-Roxo flex h-screen w-screen items-center justify-center">
      <div className="bg-white p-[10px] w-[350px] rounded-[5px] lg:w-[400px]">
        <a href="#"><box-icon name="left-arrow-alt" color="#2b0464"></box-icon></a>
        <div className="flex h-[430px] flex-col items-center justify-center">
          <img className="mb-[30px]" src={logoBranca} alt="logo-branca" />
          <form className="flex flex-col text-[16px] mb-[35px]">
            <label className="mb-[6px]">Nome</label>
            <input
              className="mb-[15px] h-[45px] w-[300px] rounded-[5px] bg-gray-300 border border-gray-400 focus:border-Laranja outline-none px-4 py-2 duration-200"
              type="email"
            />
            <label className="mb-[6px]">Email</label>
            <input
              className="mb-[15px] h-[45px] w-[300px] rounded-[5px] bg-gray-300 border border-gray-400 focus:border-Laranja outline-none px-4 py-2 duration-200"
              type="email"
            />

            <label className="mb-[6px]">Senha</label>
            <div className="relative w-[300px]">
              <input
                className="h-[45px] w-full rounded-[5px] bg-gray-300 border border-gray-400 focus:border-Laranja outline-none px-4 py-2 pr-10 duration-200"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 mt-[8.5%] -translate-y-1/2 text-gray-700"
              >
                <box-icon
                  name={showPassword ? "hide" : "show"}
                  color="#4b5563" // Tailwind text-gray-700
                ></box-icon>
              </button>
            </div>
          </form>

          <button className="w-[300px] bg-Roxo h-[45px] rounded-[5px] text-Laranja hover:scale-105 duration-300">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cadastrar;
