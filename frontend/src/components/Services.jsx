const services = [
    {
        title: 'Masaje Relajante',
        text: 'Alivia estrés y tensión muscular.',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Postoperatorio',
        text: 'Acompañamiento y recuperación.',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Aromaterapia',
        text: 'Bienestar integral y relajación.',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop'
    },
]

function Services() {

    return (

        <section id="servicios" className="bg-[#f5f0ea] px-20 py-24">

            <div className="text-center mb-16">

                <p className="uppercase tracking-[5px] text-[#b28c88] text-sm">
                    Nuestros servicios
                </p>

                <h2 className="text-6xl text-[#9b7774] font-serif mt-4">
                    Terapias para tu bienestar
                </h2>

            </div>

            <div className="grid grid-cols-3 gap-10">

                {services.map((service, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:-translate-y-2 transition"
                    >

                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-80 object-cover"
                        />

                        <div className="p-8 text-center">

                            <h3 className="text-3xl text-[#9b7774] font-serif mb-4">
                                {service.title}
                            </h3>

                            <p className="text-[#7d6562] text-lg leading-relaxed">
                                {service.text}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Services