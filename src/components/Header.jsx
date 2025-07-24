import logo from "../img/Logo-chave-certa.png";

const Header = () => {
  return (
    <>
      <div className="bg-Roxo flex h-[72px] items-center w-full">
        <div className="mx-[7%] flex w-full justify-between lg:mx-[50px]">
          <img className="" src={logo} alt="logo" />
          <button className="text-Laranja flex h-[40px] w-[120px] items-center justify-center gap-[11px] rounded-[5px] bg-white duration-300 hover:scale-105">
            <box-icon name="user" type="solid" color="#ff880c"></box-icon>
            Entrar
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
