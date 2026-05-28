import {
    Heart,
    Sparkles,
    Leaf,
    Activity,
    Smile,
    ShieldCheck
} from 'lucide-react'

const benefits = [
    {
        icon: Heart,
        title: 'Relajación Profunda',
        text: 'Disminuye el estrés, la ansiedad y la tensión muscular, brindando una sensación de calma y bienestar integral.'
    },
    {
        icon: Activity,
        title: 'Recuperación Corporal',
        text: 'Favorece la recuperación muscular y postoperatoria, ayudando a reducir inflamación y molestias físicas.'
    },
    {
        icon: Leaf,
        title: 'Equilibrio Natural',
        text: 'Ayuda a armonizar cuerpo y mente mediante terapias enfocadas en el bienestar físico y emocional.'
    },
    {
        icon: Sparkles,
        title: 'Mejora Estética',
        text: 'Contribuye a mejorar la apariencia de la piel, reafirmar tejidos y moldear diferentes áreas del cuerpo.'
    },
    {
        icon: Smile,
        title: 'Bienestar Emocional',
        text: 'Las terapias ayudan a liberar tensiones acumuladas y promueven una sensación de tranquilidad y felicidad.'
    },
    {
        icon: ShieldCheck,
        title: 'Cuidado Profesional',
        text: 'Tratamientos realizados con técnicas especializadas y atención enfocada en tu comodidad y seguridad.'
    }
]

function Benefits() {

    return (

        <section
            id="beneficios"
            className="bg-[#f5f0ea] px-6 md:px-20 py-32"
        >

            <div className="text-center mb-20">

                <p className="uppercase tracking-[5px] text-[#b28c88] text-sm">
                    Beneficios
                </p>

                <h2 className="text-5xl md:text-6xl text-[#9b7774] font-serif mt-6">
                    Bienestar para tu cuerpo
                </h2>

                <p className="text-[#7d6562] text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
                    Descubre cómo nuestros tratamientos ayudan a mejorar tu salud,
                    relajación y bienestar físico mientras disfrutas de una experiencia
                    completamente renovadora.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {benefits.map((benefit, index) => {

                    const Icon = benefit.icon

                    return (

                        <div
                            key={index}
                            className="bg-white p-10 rounded-[40px] shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                        >

                            <div className="w-16 h-16 rounded-full bg-[#f5e3df] flex items-center justify-center mb-8">

                                <Icon
                                    className="text-[#9b7774]"
                                    size={32}
                                />

                            </div>

                            <h3 className="text-3xl text-[#9b7774] font-serif mb-6">
                                {benefit.title}
                            </h3>

                            <p className="text-[#7d6562] text-lg leading-relaxed text-justify">
                                {benefit.text}
                            </p>

                        </div>
                    )
                })}

            </div>

        </section>
    )
}

export default Benefits