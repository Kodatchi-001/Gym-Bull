import Header from '../components/Header'
export default function HomPage() {
    return (
        <>
            <section className="w-full h-screen bg-image">
                <div className="w-full h-full flex justify-center lg:justify-start flex-wrap bg-blur">
                    <Header />
                    <div className='w-5/6 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-[46%] h-[55%] lg:ml-14 xl:ml-24 flex justify-center lg:justify-start flex-wrap animation-home-page'>
                        <div className='w-full h-[75%] flex justify-center lg:justify-start flex-wrap'>
                            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-start text-white'>
                                YOUR FITNESS JOURNEY BEGINS HERE
                            </h1>
                            <p className='w-full sm:w-[70%] lg:w-5/6 text-center lg:text-start text-sm sm:text-lg text-gray-300'>
                                Our state-of-the-art facilities and expert trainers are here
                                to help you achieve your fitness goals, no matter your starting point.
                            </p>
                        </div>
                        <div>
                            <h1 className='pl-4 pr-1 py-1 rounded-lg flex items-center gap-3 text-white bg-orange-500'>
                                Explore More 
                                <i class='bx bx-right-arrow-alt text-2xl px-2 py-1 rounded-lg text-orange-500 bg-white'></i>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 