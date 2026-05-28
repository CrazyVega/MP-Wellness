function Benefits() {

    return (

        <section
            id="beneficios"
            className="bg-[#f5f0ea] px-20 py-32"
        >

            <div className="text-center mb-20">

                <p className="uppercase tracking-[5px] text-[#b28c88] text-sm">
                    Beneficios
                </p>

                <h2 className="text-6xl text-[#9b7774] font-serif mt-6">
                    Bienestar para tu cuerpo
                </h2>

            </div>

            <div className="grid grid-cols-3 gap-10">

                <div className="bg-white p-12 rounded-[40px] shadow-lg">
                    <h3 className="text-3xl text-[#9b7774] font-serif mb-6">
                        Relajación
                    </h3>

                    <p className="text-[#7d6562] text-lg">
                        Reduce estrés y tensión muscular.
                    </p>
                </div>

                <div className="bg-white p-12 rounded-[40px] shadow-lg">
                    <h3 className="text-3xl text-[#9b7774] font-serif mb-6">
                        Recuperación
                    </h3>

                    <p className="text-[#7d6562] text-lg">
                        Mejora procesos postoperatorios.
                    </p>
                </div>

                <div className="bg-white p-12 rounded-[40px] shadow-lg">
                    <h3 className="text-3xl text-[#9b7774] font-serif mb-6">
                        Equilibrio
                    </h3>

                    <p className="text-[#7d6562] text-lg">
                        Armoniza cuerpo y mente.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Benefits