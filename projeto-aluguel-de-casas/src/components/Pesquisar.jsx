const Pesquisar = () => {
    return ( 
    <>
    <div className="flex flex-col items-center justify-center gap-[16px] mt-[103px]">
        <h1 className="text-[28px] font-bold">Onde você quer morar?</h1>
        <div className="flex items-center justify-between border-[3px] border-VerdeForte rounded-full p-[1%] w-[374px]">
            <box-icon name='map' type='solid' color='#04642b' size="35px"></box-icon>
            <input className="flex-grow px-2 py-1 bg-transparent focus:outline-none text-gray-700" type="search" />
            <button className="flex items-center justify-center bg-VerdeForte w-[54px] h-[54px] rounded-full">
                <box-icon name='search' color='#ffffff' ></box-icon>
            </button>
        </div>
    </div>
    </> 
    );
}
 
export default Pesquisar;