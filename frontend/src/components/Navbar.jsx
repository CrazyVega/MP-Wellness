import logo from '../assets/logo.png'

function Navbar() {

    const token = localStorage.getItem('token')

    const rol = localStorage.getItem('rol')


    return (

        <nav className="w-full flex justify-between items-center px-16 py-6 bg-[#f5f0ea] fixed top-0 left-0 z-50 shadow-sm">

            {/* LOGO */}

            <div className="flex items-center gap-4">

                <img
                    src={logo}
                    alt="logo"
                    className="w-16"
                />

                <div>

                    <h1 className="text-3xl text-[#9b7774] font-serif">
                        Magaly
                    </h1>

                    <p className="text-[#9b7774] text-sm tracking-[4px]">
                        Healing Hands
                    </p>

                </div>

            </div>


            {/* MENU */}

            <ul className="flex gap-10 text-[#7d6562] font-light">

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
                                Dashboard
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
                                Dashboard
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
                            Dashboard
                        </a>
                    </li>
                )}

            </ul>


            {/* BOTONES DERECHA */}

            <div className="flex gap-4">

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

        </nav>
    )
}

export default Navbar