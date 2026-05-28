import logo from '../assets/logo.png'

import {
    Phone,
    Mail
} from 'lucide-react'

import {
    FaInstagram
} from 'react-icons/fa'


function Footer() {

    return (

        <footer className="bg-[#8f6d69] text-white mt-32">

            <div className="max-w-7xl mx-auto px-10 py-20">

                <div className="grid md:grid-cols-4 gap-14">


                    {/* LOGO */}

                    <div>

                        <div className="flex items-center gap-4">

                            <img
                                src={logo}
                                alt="logo"
                                className="w-16"
                            />

                            <div>

                                <h2 className="text-4xl font-serif">

                                    Magaly

                                </h2>

                                <p className="tracking-[4px] text-sm">

                                    HEALING HANDS

                                </p>

                            </div>

                        </div>

                        <p className="mt-6 text-[#f3e7e4] leading-relaxed">

                            Recuperación, bienestar y equilibrio
                            mediante técnicas terapéuticas
                            especializadas.

                        </p>

                    </div>


                    {/* NAVEGACIÓN */}

                    <div>

                        <h3 className="text-2xl mb-6 font-serif">

                            Navegación

                        </h3>

                        <div className="flex flex-col gap-3">

                            <a
                                href="#inicio"
                                className="hover:translate-x-1 transition-all"
                            >
                                Inicio
                            </a>

                            <a
                                href="#servicios"
                                className="hover:translate-x-1 transition-all"
                            >
                                Servicios
                            </a>

                            <a
                                href="#sobre-mi"
                                className="hover:translate-x-1 transition-all"
                            >
                                Sobre mí
                            </a>

                            <a
                                href="#beneficios"
                                className="hover:translate-x-1 transition-all"
                            >
                                Beneficios
                            </a>

                            <a
                                href="#contacto"
                                className="hover:translate-x-1 transition-all"
                            >
                                Contacto
                            </a>

                        </div>

                    </div>


                    {/* CONTACTO */}

                    <div>

                        <h3 className="text-2xl mb-6 font-serif">

                            Contacto

                        </h3>

                        <div className="flex flex-col gap-5">

                            <div className="flex items-center gap-3">

                                <Phone size={18} />

                                <span>
                                    +57 300 000 0000
                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <Mail size={18} />

                                <span>
                                    contacto@magaly.com
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* INSTAGRAM */}

                    <div>

                        <h3 className="text-2xl mb-6 font-serif">

                            Redes

                        </h3>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="
                            flex
                            items-center
                            gap-3
                            hover:translate-x-1
                            transition-all
                            "
                        >

                            <FaInstagram size={20} />

                            <span>
                                @magalyhealinghands
                            </span>

                        </a>

                    </div>

                </div>


                {/* COPYRIGHT */}

                <div
                    className="
                    border-t
                    border-white/20
                    mt-16
                    pt-8
                    text-center
                    text-[#f3e7e4]
                    "
                >

                    © 2026 Magaly Healing Hands.
                    Todos los derechos reservados.

                </div>

            </div>

        </footer>
    )
}

export default Footer