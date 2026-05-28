function Hero() {

    return (

        <section id="inicio" className="w-full min-h-screen bg-[#f5f0ea] flex items-center px-20">

            <div className="w-1/2 flex flex-col gap-8">

                <p className="uppercase tracking-[6px] text-[#b28c88] text-sm">
                    Bienestar para cuerpo, mente y alma
                </p>

                <h1 className="text-8xl text-[#9b7774] leading-tight font-serif">
                    Magaly
                    <br />
                    Healing Hands
                </h1>

                <p className="text-[#7d6562] text-2xl leading-relaxed w-[80%]">
                    Terapias diseñadas para ayudarte a relajarte,
                    sanar y reconectar contigo mismo.
                </p>

                <div className="flex gap-6 mt-4">


                </div>

            </div>

            <div className="w-1/2 flex justify-center">

                <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
                    alt="spa"
                    className="rounded-[60px] w-[90%] h-[700px] object-cover shadow-2xl"
                />

            </div>

        </section>
    )
}

export default Hero