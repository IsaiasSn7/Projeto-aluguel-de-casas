import logo from "../img/Logo-chave-certa.png";

const HeaderLogado = () => {
  return (
    <>
      <div className="bg-Roxo flex h-[72px] items-center">
        <div className="mx-[7%] flex w-full justify-between lg:mx-[50px]">
          <img className="" src={logo} alt="logo" />
          <div className="flex">
            <div className="my-auto flex gap-[7px]">
              <box-icon name="heart" color="#ffffff"></box-icon>
              <h1 className="text-white">Favoritos</h1>
            </div>
            <div>
              <div>
                <h1>nome</h1>
                <p>sair</p>
              </div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLogado;
