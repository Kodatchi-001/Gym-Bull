import { cards_page_4 } from '../utils/Logic.js';

export default function Page_5() {
    return <>
        <section className="w-full lg:h-screen flex justify-center items-center mt-10 lg:mt-0">
            <div className="w-[85%] lg:w-[95%] xl:w-[85%] h-[90%] flex flex-wrap gap-5 lg:gap-0">
                <div className="w-full h-[25%] flex flex-col justify-center items-center lg:items-start gap-2">
                    <h1 className="w-full text-center lg:text-start text-2xl">
                        REVIEWS
                    </h1>
                    <h1 className="text-center lg:text-start text-5xl lg:text-6xl Font-Bold-Tittles">
                        FROM YOU
                    </h1>
                </div>
                <div className="w-full h-full lg:h-[75%] flex justify-center items-center">
                    <div className="w-full h-full flex flex-wrap overflow-hidden gap-3 lg:gap-0">
                        <div className="w-full h-full lg:h-[85%] flex cards">
                            <div className="min-w-full h-full flex justify-between items-center flex-wrap card-slides gap-5 sm:gap-2 lg:gap-0">
                                {/*Card-1*/}
                                <div className="w-full sm:w-[48%] lg:w-[32%] h-3/5 flex flex-wrap px-5 lg:px-8 py-3 border-2 border-black rounded-3xl gap-3 lg:gap-0">
                                    <div className="w-full h-[45%] flex justify-between items-center">
                                        <h1 className="px-6 py-1 border-2 border-black rounded-full text-2xl">
                                            Emily H.
                                        </h1>
                                        <i class='bx bx-user px-3 py-2 text-3xl text-orange-500 border-2 border-orange-500 rounded-full'></i>
                                    </div>
                                    <p className="text-[1rem] lg:text-[0.9rem] xl:text-[1rem]">
                                        Joining this gym has been a game changer for me. I've seen incredible
                                        improvements in my fitness and
                                        confidence. The trainers are professional and motivating.
                                    </p>
                                </div>
                                {/*Card-2*/}
                                <div className="w-full sm:w-[48%] lg:w-[32%] h-3/5 flex flex-wrap px-5 lg:px-8 py-3 border-2 border-black rounded-3xl gap-3 lg:gap-0">
                                    <div className="w-full h-[45%] flex justify-between items-center">
                                        <h1 className="px-6 py-1 border-2 border-black rounded-full text-2xl">
                                            Julien R.
                                        </h1>
                                        <i class='bx bx-user px-3 py-2 text-3xl text-orange-500 border-2 border-orange-500 rounded-full'></i>
                                    </div>
                                   <p className="text-[1rem] lg:text-[0.9rem] xl:text-[1rem]">
                                        This gym has completely transformed my approach to fitness.
                                        The varied workouts and supportive trainers keep me coming back.
                                        It's not just about working out.
                                    </p>
                                </div>
                                {/*Card-3*/}
                                <div className="w-full sm:w-[48%] lg:w-[32%] h-3/5 flex flex-wrap px-5 lg:px-8 py-3 border-2 border-black rounded-3xl gap-3 lg:gap-0">
                                    <div className="w-full h-[45%] flex justify-between items-center">
                                        <h1 className="px-6 py-1 border-2 border-black rounded-full text-2xl">
                                            Sophie M.
                                        </h1>
                                        <i class='bx bx-user px-3 py-2 text-3xl text-orange-500 border-2 border-orange-500 rounded-full'></i>
                                    </div>
                                   <p className="text-[1rem] lg:text-[0.9rem] xl:text-[1rem]">
                                        I’m thrilled to have joined this gym.The effective workouts
                                        are just what I needed. The variety of classes ensures
                                        I stay motivated and on track.
                                    </p>
                                </div>
                            </div>
                            <div className="min-w-full h-full flex justify-between items-center flex-wrap card-slides gap-5 lg:gap-0">
                                {/*Card-1*/}
                                <div className="w-full sm:w-[48%] lg:w-[32%] h-3/5 flex flex-wrap px-5 lg:px-8 py-3 border-2 border-black rounded-3xl gap-3 lg:gap-0">
                                    <div className="w-full h-[45%] flex justify-between items-center">
                                        <h1 className="px-6 py-1 border-2 border-black rounded-full text-2xl">
                                            Alice G.
                                        </h1>
                                        <i class='bx bx-user px-3 py-2 text-3xl text-orange-500 border-2 border-orange-500 rounded-full'></i>
                                    </div>
                                   <p className="text-[1rem] lg:text-[0.9rem] xl:text-[1rem]">
                                        This gym has exceeded my expectations. The workouts are diverse and keep me engaged.
                                        The trainers are knowledgeable and genuinely care about my progress.
                                    </p>
                                </div>
                                {/*Card-2*/}
                                <div className="w-full sm:w-[48%] lg:w-[32%] h-3/5 flex flex-wrap px-5 lg:px-8 py-3 border-2 border-black rounded-3xl gap-3 lg:gap-0">
                                    <div className="w-full h-[45%] flex justify-between items-center">
                                        <h1 className="px-6 py-1 border-2 border-black rounded-full text-2xl">
                                            Julien R.
                                        </h1>
                                        <i class='bx bx-user px-3 py-2 text-3xl text-orange-500 border-2 border-orange-500 rounded-full'></i>
                                    </div>
                                   <p className="text-[1rem] lg:text-[0.9rem] xl:text-[1rem]">
                                        This gym has completely transformed my approach to fitness.
                                        The varied workouts and supportive trainers keep me coming back.
                                        It's not just about working out.
                                    </p>
                                </div>
                                {/*Card-3*/}
                                <div className="w-full sm:w-[48%] lg:w-[32%] h-3/5 flex flex-wrap px-5 lg:px-8 py-3 border-2 border-black rounded-3xl gap-3 lg:gap-0">
                                    <div className="w-full h-[45%] flex justify-between items-center">
                                        <h1 className="px-6 py-1 border-2 border-black rounded-full text-2xl">
                                            Sophie M.
                                        </h1>
                                        <i class='bx bx-user px-3 py-2 text-3xl text-orange-500 border-2 border-orange-500 rounded-full'></i>
                                    </div>
                                   <p className="text-[1rem] lg:text-[0.9rem] xl:text-[1rem]">
                                        I’m thrilled to have joined this gym.The effective workouts
                                        are just what I needed. The variety of classes ensures
                                        I stay motivated and on track.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[15%] flex justify-center items-center gap-5">
                            <i className='bx bx-chevron-left text-4xl p-2 rounded-full cursor-pointer bg-black text-white'
                                onClick={() => cards_page_4(-1)}></i>
                            <i className='bx bx-chevron-right text-4xl p-2 rounded-full cursor-pointer bg-black text-white'
                                onClick={() => cards_page_4(1)}></i>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}