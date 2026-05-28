import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

function InternalNavbar() {

    const rol = localStorage.getItem('rol')

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <nav className="w-full bg-[#f5f0ea] shadow-sm px-6 md:px-10 lg:px-16 py-5">

            <div className="flex justify-between items-center">

                {/* LOGO */}

                <a
                    href="/"
                    className="flex items-center gap-3"
                >

                    <img
                        src={logo}
                        alt="logo"
                        className="w-12 md:w-16"
                    />

                    <div>

                        <h1 className="text-2xl md:text-3xl text-[#9b7774] font-serif">
                            Magaly
                        </h1>

                        <p className="text-[#9b7774] text-xs md:text-sm tracking-[3px] md:tracking-[4px]">
                            Healing Hands
                        </p>

                    </div>

                </a>

                {/* BOTÓN MOBILE */}

                <button
                    className="lg:hidden text-[#9b7774]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* MENU DESKTOP */}

                <div className="hidden lg:flex items-center gap-6">

                    <a
                        href="/"
                        className="text-[#7d6562] hover:text-[#9b7774] transition"
                    >
                        Inicio
                    </a>

                    <a
                        href="/dashboard"
                        className="text-[#7d6562] hover:text-[#9b7774] transition"
                    >
                        Dashboard
                    </a>

                    {rol === 'cliente' && (

                        <a
                            href="/agendar"
                            className="text-[#7d6562] hover:text-[#9b7774] transition"
                        >
                            Agendar
                        </a>
                    )}

                    {rol === 'admin' && (

                        <a
                            href="/admin-citas"
                            className="text-[#7d6562] hover:text-[#9b7774] transition"
                        >
                            Admin
                        </a>
                    )}

                    <button
                        onClick={() => {

                            localStorage.clear()

                            window.location.href = '/'
                        }}
                        className="bg-[#9b7774] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                    >
                        Cerrar sesión
                    </button>

                </div>

            </div>

            {/* MENU MOBILE */}

            {menuOpen && (

                <div className="flex flex-col gap-5 mt-8 lg:hidden">

                    <a
                        href="/"
                        className="text-[#7d6562] hover:text-[#9b7774] transition"
                    >
                        Inicio
                    </a>

                    <a
                        href="/dashboard"
                        className="text-[#7d6562] hover:text-[#9b7774] transition"
                    >
                        Dashboard
                    </a>

                    {rol === 'cliente' && (

                        <a
                            href="/agendar"
                            className="text-[#7d6562] hover:text-[#9b7774] transition"
                        >
                            Agendar
                        </a>
                    )}

                    {rol === 'admin' && (

                        <a
                            href="/admin-citas"
                            className="text-[#7d6562] hover:text-[#9b7774] transition"
                        >
                            Admin
                        </a>
                    )}

                    <button
                        onClick={() => {

                            localStorage.clear()

                            window.location.href = '/'
                        }}
                        className="bg-[#9b7774] text-white px-6 py-3 rounded-full hover:opacity-90 transition w-full"
                    >
                        Cerrar sesión
                    </button>

                </div>
            )}

        </nav>
    )
}

export default InternalNavbar