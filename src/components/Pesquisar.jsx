import casa from "../img/casa.png";

const Pesquisar = () => {
  return (
    <>
      <div className="flex flex-col lg:mb-[100px] lg:flex-row lg:justify-between lg:px-[50px]">
        <div className="mt-[103px] flex flex-col items-center justify-center gap-[16px] lg:mt-[30px] lg:items-start">
          <h1 className="text-Laranja text-[28px] font-bold lg:text-[36px]">
            Onde você quer morar?
          </h1>
          <div className="border-Roxo flex w-[374px] items-center justify-between rounded-full border-[3px] p-[2%] lg:w-[500px]">
            <box-icon
              name="map"
              type="solid"
              color="#2b0464"
              size="35px"
            ></box-icon>
            <input
              className="flex-grow bg-transparent px-2 py-1 text-[18px] text-gray-700 focus:outline-none lg:text-[25px]"
              type="search"
            />
            <button className="bg-Roxo flex h-[54px] w-[54px] items-center justify-center rounded-full duration-300 hover:scale-110">
              <box-icon name="search" color="#ffffff"></box-icon>
            </button>
          </div>
        </div>
        <div className="mt-[50px] flex justify-center">
          <img className="w-[374px] lg:w-[650px]" src={casa} alt="casa" />
        </div>
      </div>
    </>
  );
};

export default Pesquisar;
