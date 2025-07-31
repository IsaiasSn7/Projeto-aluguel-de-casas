import casa from "../img/casacard.png";

const Imoveis = () => {
  return (
    <>
      <div className="m-4 border-[2px] border-[#b5b5b5] rounded-[14px]">
        <img src={casa} alt="img-casa" />
        <div className="flex flex-col gap-[30px] p-4">

          <div className="flex justify-between">
            <div className="text-[#595959] font-bold">
              <h1>Rua Eduardo Bezerra, 1182</h1>
              <h1>São joão do Taouape, Fortaleza/CE</h1>
            </div>
            <div className="flex items-center justify-center rounded-[5px] bg-Roxo w-[50px]">
              <box-icon name="trash" color="#ffffff"></box-icon>
            </div>
          </div>

          <p className="text-[#A1A1A1]">Casa para alugar, 500m²<br /> 
          Excelente Casa à venda ou Locação
          </p>

          <div className="flex gap-[10px]">
            <p className="text-[#A1A1A1]">500m²</p>
            <box-icon name="bed" color="#575757"></box-icon>
            <p className="text-[#A1A1A1]">3 Quartos</p>
            <box-icon name="car" color="#575757"></box-icon>
            <p className="text-[#A1A1A1]">5 Garagem</p>
          </div>

          <div className="flex justify-between">
            <h1 className="text-[30px] text-Laranja font-bold">R$ 5.000</h1>
            <button className="bg-Roxo text-white w-[95px] h-[45px] rounded-[5px]">Contatar</button>
          </div>

        </div>

      </div>
    </>
  );
};

export default Imoveis;
