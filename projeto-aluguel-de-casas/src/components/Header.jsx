import logo from '../img/Logo-chave-certa.png';

const Header = () => {
    return (
        <>
            <div className='bg-VerdeForte flex items-center h-[72px]'>
                <div className='flex justify-between mx-[7%] w-full'>
                    <img className='' src={logo} alt="logo" />
                    <button className='flex items-center justify-center gap-[11px] w-[120px] h-[40px] bg-VerdeBranco rounded-[5px] text-VerdeForte'>
                        <box-icon name='user' type='solid' color='#7bdb24' ></box-icon>
                        Entrar
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;