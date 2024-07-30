import Logo from '../assets/logo.png'
export default function Header() {
    return (
        <>
            <header className="w-full h-[9vh] lg:h-[12vh] flex justify-center">
                <div className="w-[90%] lg:w-[95%] xl:w-[90%] h-full flex justify-between">
                    <div className="w-1/4 h-full lg:flex items-center hidden">
                        <ul className="w-full h-[55%] flex justify-evenly items-center rounded-xl text-white bg-blur-white">
                            <li><a href="">Home</a></li>
                            <li><a href="">Memrship</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center">
                        <img src={Logo} alt="" className='scale-125 lg:scale-100 h-[45%] lg:h-auto lg:w-1/2'/>
                    </div>
                    <div className="w-1/4 h-full flex justify-end gap-3 items-center">
                        <h1 className='text-white hidden lg:flex'>Menu</h1>
                        <i class='bx bx-align-right px-2 py-1 text-xl rounded-lg cursor-pointer hidden lg:flex text-black bg-white'></i>
                    </div>
                </div>
            </header>
        </>
    )
}