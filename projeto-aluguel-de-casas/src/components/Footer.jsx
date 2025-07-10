import logo from '../img/Logo-chave-certa.png';

const Footer = () => {
    return (
        <>
            <div className='bg-VerdeForte h-[130px]'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='mt-[50px]'>
                        <img src={logo} alt="logo" />
                    </div>
                    <h1 className='text-white text-[14px]'>Todos os direitos reservados.</h1>
                </div>
            </div>
        </>
    );
}

export default Footer;