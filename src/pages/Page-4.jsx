export default function Page_4() {
    return <>
        <section className="w-full lg:h-screen flex justify-center items-center mt-10 lg:mt-0" id="Page-4">
            <div className="w-full lg:w-[95%] xl:w-[85%] h-[95%] flex justify-center flex-wrap lg:rounded-3xl py-5 lg:py-0 lg:p-10 gap-5 lg:gap-0 bg-orange-500">
                <div className="w-full lg:w-[95%] h-[20%] flex flex-wrap-reverse">
                    <div className="w-full lg:w-1/2 h-full flex items-center">
                        <a href="#Page-5" className="px-4 py-2 pl-5 lg:flex items-center gap-14 rounded-lg bg-white hidden">
                            Personnal Training
                            <i class='bx bx-down-arrow-alt px-2 py-1 rounded-full text-2xl bg-black text-white'></i>
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-end gap-2 text-white">
                        <h1 className="w-full text-center lg:text-end text-2xl">
                            PRICING PLAN
                        </h1>
                        <h1 className="text-center text-5xl lg:text-6xl Font-Bold-Tittles">
                            JOIN TODAY
                        </h1>
                    </div>
                </div>
                <div className="w-[90%] lg:w-full h-[60%] flex justify-center lg:justify-around items-center flex-wrap gap-5 lg:gap-0">
                    {/*Card-1*/}
                    <div className="w-full sm:w-[45%] lg:w-[30%] xl:w-[28%] h-[90%] flex flex-wrap px-7 py-4 border-4 rounded-3xl border-white lg:text-white cursor-pointer card-page-4">
                        <div className="w-full h-[45%] flex flex-wrap items-center gap-3">
                            <div>
                                <div className="p-2 flex justify-center items-center rounded-full border-4 border-white bg-blur-white-2">
                                    <div className="p-4 rounded-full bg-orange-500 opacity-0">

                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <h1 className="w-4/5 text-3xl Font-Bold-Tittles">
                                    ONE DAY PASS
                                </h1>
                            </div>
                        </div>
                        <div className="w-full h-[45%] mt-auto flex flex-col justify-center gap-3">
                            <h1 className="text-2xl">
                                $15/Per Day
                            </h1>
                            <p className="text-[0.8rem]">
                                Whether you're visiting F7 on business or are just
                                taking your personal fitness one day at a time,
                                wo'd like to invite you to experience all that F7
                                has to offer. You are always Welcome!
                            </p>
                        </div>
                    </div>
                    {/*Card-2*/}
                    <div className="w-full sm:w-[45%] lg:w-[30%] xl:w-[28%] h-[90%] flex flex-wrap px-7 py-4 border-4 rounded-3xl border-white lg:text-white cursor-pointer card-page-4">
                        <div className="w-full h-[45%] flex flex-wrap items-center gap-3">
                            <div>
                                <div className="p-2 flex justify-center items-center rounded-full border-4 border-white bg-blur-white-2">
                                    <div className="p-4 rounded-full bg-orange-500 opacity-0">

                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <h1 className="w-4/5 text-3xl Font-Bold-Tittles">
                                    MONTHLY PASS
                                </h1>
                            </div>
                        </div>
                        <div className="w-full h-[45%] mt-auto flex flex-col justify-center gap-3">
                            <h1 className="text-2xl">
                                $80/Per Month
                            </h1>
                            <p className="text-[0.8rem]">
                                Our monthly membership helps you to keep your
                                fitness goals on track without a commitment of any
                                kind, while still enjoying all of the amenities that F7
                                has to offer.
                            </p>
                        </div>
                    </div>
                    {/*Card-3*/}
                    <div className="w-full sm:w-[45%] lg:w-[30%] xl:w-[28%] h-[90%] flex flex-wrap px-7 py-4 border-4 rounded-3xl border-white lg:text-white cursor-pointer card-page-4">
                        <div className="w-full h-[45%] flex flex-wrap items-center gap-3">
                            <div>
                                <div className="p-2 flex justify-center items-center rounded-full border-4 border-white bg-blur-white-2">
                                    <div className="p-4 rounded-full bg-orange-500 opacity-0">

                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <h1 className="w-4/5 text-3xl Font-Bold-Tittles">
                                    YEARLY PASS
                                </h1>
                            </div>
                        </div>
                        <div className="w-full h-[45%] mt-auto flex flex-col justify-center gap-3">
                            <h1 className="text-2xl">
                                $110/Per Year
                            </h1>
                            <p className="text-[0.8rem]">
                                With a 1-year commitment, we offer a monthly
                                membership for only $59. When you pre-
                                purchase a complete year Individual
                                membership you get 2/m Free Extention.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[10%] mt-auto flex justify-center lg:justify-end items-center">
                    <h1 className="px-5 py-2 bg-white text-black rounded-full">
                        Order Now
                    </h1>
                </div>
            </div>
        </section>
    </>
}