import logoBranca from "../img/logo-branca.png";

const Entrar = () => {
  return (
    <>
      <div className="bg-Roxo flex h-screen w-screen items-center justify-center">
        <div className="bg-white p-[10px]">
            <box-icon name="left-arrow-alt" color="#2b0464"></box-icon>
          <div className="flex h-[400px] w-[400px] flex-col items-center justify-center">
            <img className="mb-[30px]" src={logoBranca} alt="logo-branca" />
            <form className="flex flex-col text-[16px]">
              <label className="mb-[6px]">Email</label>
              <input
                className="mb-[15px] h-[45px] w-[300px] rounded-[5px] bg-gray-200"
                type="email"
              />
              <label className="mb-[6px]">Senha</label>
              <input
                className="h-[45px] w-[300px] rounded-[5px] bg-gray-200"
                type="password"
              />
            </form>
            <div>
              <a className="text-[12px]" href="#">
                Esqueci minha senha
              </a>
              <a className="text-[12px]" href="#">
                Criar conta
              </a>
            </div>
            <button>Entrar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entrar;
