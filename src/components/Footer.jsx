import logo from "../img/Logo-chave-certa.png";

const Footer = () => {
  return (
    <>
      <div className="bg-Roxo h-[130px] lg:h-[100px]">
        <div className="flex flex-col items-center justify-center lg:mx-[50px] lg:h-full lg:flex-row lg:justify-between">
          <div className="mt-[50px] lg:mt-0">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="text-[14px] text-white">
            Todos os direitos reservados.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
