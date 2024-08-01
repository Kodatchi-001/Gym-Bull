import Logo from '../assets/logo.png'
export default function Header() {
    return (
        <>
            <header className="w-full h-[9vh] lg:h-[12vh] flex justify-center flex-wrap overflow-hidden">
                <div className="w-[90%] lg:w-[95%] xl:w-[90%] h-full flex justify-between header_links">
                    <div className="w-1/4 h-full lg:flex items-center hidden">
                        <ul className="w-full h-[55%] flex justify-evenly items-center rounded-xl text-white bg-blur-white">
                            <li><a href="#HomePage">Home</a></li>
                            <li><a href="#Page-2">About</a></li>
                            <li><a href="#Page-4">Memrship</a></li>
                            <li><a href="#Page-5">Blog</a></li>
                        </ul>
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center">
                        <img src={Logo} alt="" className='scale-125 lg:scale-100 h-1/2 lg:h-auto lg:w-1/2'/>
                    </div>
                    <div className="w-1/4 h-full flex justify-end gap-3 items-center">
                        <h1 className='text-white hidden lg:flex'>Menu</h1>
                        <i class='bx bx-align-right px-2 py-1 text-xl rounded-lg cursor-pointer hidden lg:flex text-white bg-orange-500'></i>
                    </div>
                    <div className='w-1/2 h-full flex justify-end items-center lg:hidden'>
                        <i class='bx bx-menu-alt-right text-3xl text-orange-500'></i>
                    </div>
                </div>
                <ul className="w-full h-[55%] flex justify-around items-center rounded-xl text-orange-500">
                    <li className='text-sm'><a href="#HomePage">Home</a></li>
                    <li className='text-sm'><a href="#Page-2">About</a></li>
                    <li className='text-sm'><a href="#Page-4">Memrship</a></li>
                    <li className='text-sm'><a href="#Page-5">Blog</a></li>
                </ul>
            </header>
        </>
    )
}