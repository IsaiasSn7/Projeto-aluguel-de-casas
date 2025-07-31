import logo from "../img/Logo-chave-certa.png";
import user from "../img/user.png";

const HeaderLogado = () => {
  return (
    <>
      <div className="bg-Roxo flex h-[72px] items-center w-full">
        <div className="mx-[7%] flex w-full items-center justify-between lg:mx-[50px]">
          <img className="h-[40px]" src={logo} alt="logo" />
          <div className="flex gap-[70px]">
            <div className="my-auto flex gap-[7px]">
              <box-icon class="hidden md:block" name="heart" color="#ffffff"></box-icon>
              <h1 className="text-white hidden md:block">Favoritos</h1>
            </div>
            <div className="flex gap-[10px] invisible md:visible">
              <div className="flex flex-col gap-[4px] justify-center items-end">
                <h1 className="text-Laranja m-0 leading-none">Isaias Sousa</h1>
                <p className="text-white m-0 leading-none">sair</p>
              </div>
              <img className="w-[50px] block rounded-full" src={user} alt="user" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLogado;
