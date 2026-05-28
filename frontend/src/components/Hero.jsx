function Hero() {

    return (

        <section
            id="inicio"
            className="w-full min-h-screen bg-[#f5f0ea] flex flex-col xl:flex-row items-center justify-center px-6 md:px-10 xl:px-20 pt-36 pb-20 gap-14 overflow-hidden"
        >

            {/* TEXTO */}

            <div className="w-full xl:w-1/2 flex flex-col gap-6 text-center xl:text-left">

                <p className="uppercase tracking-[2px] sm:tracking-[4px] md:tracking-[6px] text-[#b28c88] text-xs sm:text-sm leading-relaxed">
                    Bienestar para cuerpo, mente y alma
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-[#9b7774] leading-tight font-serif break-words">
                    Magaly
                    <br />
                    Healing Hands
                </h1>

                <p className="text-[#7d6562] text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed w-full xl:w-[80%] mx-auto xl:mx-0">
                    Terapias diseñadas para ayudarte a relajarte,
                    sanar y reconectar contigo mismo.
                </p>

            </div>

            {/* IMAGEN */}

            <div className="w-full xl:w-1/2 flex justify-center">

                <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
                    alt="spa"
                    className="rounded-[30px] md:rounded-[50px] w-full max-w-[650px] h-[280px] sm:h-[400px] md:h-[500px] xl:h-[700px] object-cover shadow-2xl"
                />

            </div>

        </section>
    )
}

export default Hero