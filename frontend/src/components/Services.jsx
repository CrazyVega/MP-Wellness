const services = [
    {
        title: 'Wood Therapy',
        text: 'Tratamiento corporal con instrumentos de madera que ayuda a moldear el cuerpo, estimular la circulación y reducir la apariencia de grasa localizada y celulitis.',
        image: 'https://www.health.com/thmb/ZSbLfQvoZY6AJUEMrdfkj62F5Z8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/health-GettyImages-1386009941-1eda45e3b475473c82be01bc717e4599.jpg'
    },
    {
        title: 'Metal Therapy',
        text: 'Terapia estética con herramientas metálicas frías que favorecen el drenaje linfático, tonifican la piel y ayudan a mejorar la firmeza corporal.',
        image: 'https://www.myflawlessgirl.com/cdn/shop/products/3n9a1926_orig.jpg?v=1649273060'
    },
    {
        title: 'Sculpting Massage',
        text: 'Masaje moldeador diseñado para definir la silueta, estimular la circulación y mejorar el aspecto de la piel mediante técnicas manuales intensivas.',
        image: 'https://movmoreireland.com/cdn/shop/articles/Screenshot_2024-10-29_at_15.59.44-640540.png?v=1752170684'
    },
    {
        title: 'Linfatic Massage',
        text: 'Masaje linfático suave que ayuda a eliminar toxinas, reducir inflamación y mejorar la circulación del sistema linfático.',
        image: 'https://www.health.com/thmb/y5-nfjdFpH9tUJmQ-od_U9rR74Q=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/LymphaticDrainage-78d9c27b65794d58a3813cb6dc512516.jpg'
    },
    {
        title: 'Relaxing Massage',
        text: 'Experiencia relajante enfocada en aliviar el estrés, disminuir tensiones musculares y promover bienestar físico y mental.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Deep Tissue Massage',
        text: 'Masaje terapéutico profundo ideal para liberar contracturas musculares, aliviar dolor acumulado y mejorar la movilidad corporal.',
        image: 'https://r3physiotherapy.com/wp-content/uploads/2022/06/AdobeStock_234832810.jpeg'
    },
    {
        title: 'Post-surgery Massage',
        text: 'Tratamiento especializado para apoyar la recuperación postoperatoria, ayudando a disminuir inflamación y mejorar el proceso de cicatrización.',
        image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Linfatic Face',
        text: 'Drenaje linfático facial que reduce inflamación, mejora la circulación y aporta una apariencia más fresca y descansada al rostro.',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Radio frequency',
        text: 'Tratamiento estético no invasivo que estimula la producción de colágeno para mejorar la firmeza y elasticidad de la piel.',
        image: 'https://www.traciemartyn.com/cdn/shop/articles/blog_redsculpt_1a8c61e8-1c9b-43d5-af10-b8868941e837.jpg?v=1564783130'
    },
    {
        title: 'Vaccumm BUTT LIFT',
        text: 'Procedimiento estético que utiliza tecnología de vacío para estimular y realzar los glúteos de manera natural y no invasiva.',
        image: 'https://surebeauty.com/cdn/shop/articles/vacuum_butt_lift.png?v=1741675749'
    },
    {
        title: 'Firming Treatment',
        text: 'Tratamiento reafirmante enfocado en mejorar la elasticidad de la piel y ayudar a tonificar áreas específicas del cuerpo.',
        image: 'https://cosmeticlaserskinsurgery.com/wp-content/uploads/2022/08/pexels-elina-fairytale-3865548.jpg'
    },
    {
        title: 'Facial Rejuvenation',
        text: 'Terapia facial diseñada para revitalizar la piel, reducir signos de envejecimiento y devolver luminosidad al rostro.',
        image: 'https://dermindy.com/wp-content/uploads/2016/03/ThinkstockPhotos-187923649.jpg'
    },
    {
        title: 'Cellulite Treatment',
        text: 'Tratamiento corporal que ayuda a disminuir la apariencia de la celulitis y mejora la textura y firmeza de la piel.',
        image: 'https://cmgsites.s3.us-west-1.amazonaws.com/horvathaesthetics/wp-content/uploads/2022/11/23110657/shutterstock_1768941050-1.jpg'
    },
    {
        title: 'Acne Treatment',
        text: 'Tratamiento facial especializado para limpiar profundamente la piel, controlar el exceso de grasa y reducir imperfecciones causadas por el acné.',
        image: 'https://www.fmsskin.com/blog/wp-content/uploads/2025/04/Hormonal-Acne-Treatment.jpg'
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

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

                            <p className="text-[#7d6562] text-lg leading-relaxed text-justify">
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