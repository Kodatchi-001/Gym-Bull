export default function Page_2() {
    return <>
        <section className="w-full lg:h-[90vh] flex justify-center items-center mt-10 lg:mt-0" id="Page-2">
            <div className="w-[85%] lg:w-5/6 h-[70%] flex justify-around items-center flex-wrap-reverse lg:flex-nowrap lg:gap-20">
                <div className="w-full lg:w-[50%] h-[70vh] lg:h-full flex justify-center items-center flex-wrap-reverse gap-5">
                    <div className="w-5/6 lg:w-[25%] h-5/6 rounded-3xl card-1-page2 hidden lg:flex bg-orange-500">

                    </div>
                    <div className="w-full sm:w-4/5 lg:w-[65%] h-[75%] sm:h-5/6 rounded-3xl card-2-page2">

                    </div>
                </div>
                <div className="w-full lg:w-[45%] h-5/6 flex justify-center lg:justify-start flex-wrap gap-5 lg:gap-0">
                    <div className="w-full h-4/6 flex flex-wrap gap-5">
                        <div className="w-full h-1/2 flex justify-center lg:justify-start flex-wrap gap-2 lg:gap-0">
                            <h1 className="w-full text-center lg:text-start text-lg lg:text-3xl">ARE YOU LOOKING FOR A MENTOR?</h1>
                            <h1 className="text-5xl lg:text-7xl Font-Bold-Tittles">COACHES</h1>
                        </div>
                        <p className="w-full text-center lg:text-start text-sm lg:text-[1rem] text-gray-600">
                            Our team of certified and experienced trainers is dedicated
                            to helping you achieve your fitness goals. Whether you’re looking
                            to build muscle, lose weight, or improve overall health, our trainers
                            will create a personalized plan to guide you every step of the way.
                        </p>
                    </div>
                    <div>
                        <h1 className="px-5 py-2 rounded-full cursor-pointer text-white bg-orange-500">
                            Explore More
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    </>
}