import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

function Navbar() {

    const token = localStorage.getItem('token')
    const rol = localStorage.getItem('rol')

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <nav className="w-full bg-[#f5f0ea] fixed top-0 left-0 z-50 shadow-sm">

            <div className="flex justify-between items-center px-6 md:px-10 lg:px-16 py-5">

                {/* LOGO */}

                <div className="flex items-center gap-3">

                    <img
                        src={logo}
                        alt="logo"
                        className="w-14 md:w-20"
                    />

                    <div>

                        <h1 className="text-2xl md:text-3xl text-[#9b7774] font-serif">
                            Magaly
                        </h1>

                        <p className="text-[#9b7774] text-xs md:text-sm tracking-[3px] md:tracking-[4px]">
                            Healing Hands
                        </p>

                    </div>

                </div>

                {/* MENU DESKTOP */}

                <ul className="hidden lg:flex gap-10 text-[#7d6562] font-light items-center">

                    <li>
                        <a
                            href="#inicio"
                            className="hover:text-[#9b7774] transition"
                        >
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a
                            href="#servicios"
                            className="hover:text-[#9b7774] transition"
                        >
                            Servicios
                        </a>
                    </li>

                    <li>
                        <a
                            href="#sobre-mi"
                            className="hover:text-[#9b7774] transition"
                        >
                            Sobre mí
                        </a>
                    </li>

                    <li>
                        <a
                            href="#beneficios"
                            className="hover:text-[#9b7774] transition"
                        >
                            Beneficios
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contacto"
                            className="hover:text-[#9b7774] transition"
                        >
                            Contacto
                        </a>
                    </li>

                    {/* CLIENTE */}

                    {token && rol === 'cliente' && (

                        <>
                            <li>
                                <a
                                    href="/dashboard"
                                    className="hover:text-[#9b7774] transition"
                                >
                                    Citas
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/agendar"
                                    className="hover:text-[#9b7774] transition"
                                >
                                    Agendar
                                </a>
                            </li>
                        </>
                    )}

                    {/* ADMIN */}

                    {token && rol === 'admin' && (

                        <>
                            <li>
                                <a
                                    href="/dashboard"
                                    className="hover:text-[#9b7774] transition"
                                >
                                    Citas
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/admin-citas"
                                    className="hover:text-[#9b7774] transition"
                                >
                                    Admin
                                </a>
                            </li>
                        </>
                    )}

                    {/* TERAPEUTA */}

                    {token && rol === 'terapeuta' && (

                        <li>
                            <a
                                href="/dashboard"
                                className="hover:text-[#9b7774] transition"
                            >
                                Citas
                            </a>
                        </li>
                    )}

                </ul>

                {/* BOTONES DESKTOP */}

                <div className="hidden lg:flex gap-4">

                    {!token ? (

                        <>
                            <a
                                href="/login"
                                className="border border-[#9b7774] text-[#9b7774] px-6 py-3 rounded-full hover:bg-[#9b7774] hover:text-white transition"
                            >
                                Login
                            </a>

                            <a
                                href="/registro"
                                className="bg-[#9b7774] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                            >
                                Registro
                            </a>
                        </>

                    ) : (

                        <button
                            onClick={() => {

                                localStorage.clear()

                                window.location.href = '/'
                            }}
                            className="bg-[#9b7774] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                        >
                            Cerrar sesión
                        </button>

                    )}

                </div>

                {/* BOTÓN MOBILE */}

                <button
                    className="lg:hidden text-[#9b7774]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

            </div>

            {/* MENU MOBILE */}

            {menuOpen && (

                <div className="lg:hidden flex flex-col gap-5 px-6 pb-8 text-[#7d6562] bg-[#f5f0ea] shadow-md">

                    <a
                        href="#inicio"
                        className="hover:text-[#9b7774] transition"
                    >
                        Inicio
                    </a>

                    <a
                        href="#servicios"
                        className="hover:text-[#9b7774] transition"
                    >
                        Servicios
                    </a>

                    <a
                        href="#sobre-mi"
                        className="hover:text-[#9b7774] transition"
                    >
                        Sobre mí
                    </a>

                    <a
                        href="#beneficios"
                        className="hover:text-[#9b7774] transition"
                    >
                        Beneficios
                    </a>

                    <a
                        href="#contacto"
                        className="hover:text-[#9b7774] transition"
                    >
                        Contacto
                    </a>

                    {/* CLIENTE */}

                    {token && rol === 'cliente' && (

                        <>
                            <a
                                href="/dashboard"
                                className="hover:text-[#9b7774] transition"
                            >
                                Citas
                            </a>

                            <a
                                href="/agendar"
                                className="hover:text-[#9b7774] transition"
                            >
                                Agendar
                            </a>
                        </>
                    )}

                    {/* ADMIN */}

                    {token && rol === 'admin' && (

                        <>
                            <a
                                href="/dashboard"
                                className="hover:text-[#9b7774] transition"
                            >
                                Citas
                            </a>

                            <a
                                href="/admin-citas"
                                className="hover:text-[#9b7774] transition"
                            >
                                Admin
                            </a>
                        </>
                    )}

                    {/* TERAPEUTA */}

                    {token && rol === 'terapeuta' && (

                        <a
                            href="/dashboard"
                            className="hover:text-[#9b7774] transition"
                        >
                            Citas
                        </a>
                    )}

                    {/* BOTONES MOBILE */}

                    {!token ? (

                        <div className="flex flex-col gap-4 mt-4">

                            <a
                                href="/login"
                                className="border border-[#9b7774] text-[#9b7774] px-6 py-3 rounded-full hover:bg-[#9b7774] hover:text-white transition text-center"
                            >
                                Login
                            </a>

                            <a
                                href="/registro"
                                className="bg-[#9b7774] text-white px-6 py-3 rounded-full hover:opacity-90 transition text-center"
                            >
                                Registro
                            </a>

                        </div>

                    ) : (

                        <button
                            onClick={() => {

                                localStorage.clear()

                                window.location.href = '/'
                            }}
                            className="bg-[#9b7774] text-white px-6 py-3 rounded-full hover:opacity-90 transition mt-4"
                        >
                            Cerrar sesión
                        </button>

                    )}

                </div>
            )}

        </nav>
    )
}

export default Navbar