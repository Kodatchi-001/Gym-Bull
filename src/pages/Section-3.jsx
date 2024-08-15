export default function Section_3() {
    const lines = '--------'
    return <>
        <section className="w-full lg:h-[80vh] flex justify-center items-center mt-10 lg:mt-0">
            <div className="w-[85%] lg:w-5/6 h-5/6 flex flex-wrap gap-5 lg:gap-0">
                <div className="w-full h-1/3 flex flex-wrap gap-5 lg:gap-0">
                    <div className="w-full lg:w-1/3 h-full flex flex-col justify-center items-center lg:items-start gap-2">
                        <h1 className="w-full text-center lg:text-start text-2xl">COME TO A RESULT</h1>
                        <h1 className="text-5xl lg:text-6xl Font-Bold-Tittles">WITH US</h1>
                    </div>
                    <div className="w-full lg:w-2/3 h-full flex justify-center lg:justify-start items-center">
                        <p className="w-full lg:w-[30%] text-center lg:text-start text-gray-600">
                            Ready to take the first step towards a healthier,
                            stronger you?
                        </p>
                    </div>
                </div>
                <div className="w-full h-2/3 flex justify-center items-center flex-wrap lg:flex-nowrap gap-4 lg:gap-0 information">
                    <i class='bx bx-bowl-hot text-6xl lg:text-8xl p-8 lg:p-10 rounded-full' id="icone-1"></i>
                    <h1 className="lg:text-2xl xl:text-5xl hidden lg:flex">{lines}</h1>
                    <i class='bx bx-dumbbell text-6xl lg:text-8xl p-8 lg:p-10 rounded-full' id="icone-2"></i>
                    <h1 className="lg:text-2xl xl:text-5xl hidden lg:flex">{lines}</h1>
                    <i class='bx bx-infinite text-6xl lg:text-8xl p-8 lg:p-10 rounded-full flex sm:hidden' id="icone-4"></i>
                    <i class='bx bx-alarm-snooze text-6xl lg:text-8xl p-8 lg:p-10 rounded-full hidden sm:flex' id="icone-3"></i>
                    <h1 className="lg:text-2xl xl:text-5xl hidden lg:flex">{lines}</h1>
                    <i class='bx bx-alarm-snooze text-6xl lg:text-8xl p-8 lg:p-10 rounded-full flex sm:hidden' id="icone-3"></i>
                    <i class='bx bx-infinite text-6xl lg:text-8xl p-8 lg:p-10 rounded-full hidden sm:flex' id="icone-4"></i>
                </div>
            </div>
        </section>
    </>
}