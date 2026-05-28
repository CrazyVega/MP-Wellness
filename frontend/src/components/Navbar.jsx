import logo from '../assets/logo.png'

function Navbar() {

    const token = localStorage.getItem('token')

    const rol = localStorage.getItem('rol')


    return (

        <nav className="w-full flex justify-between items-center px-16 py-6 bg-[#f5f0ea] fixed top-0 left-0 z-50">

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

                    <p className="text-[#9b7774] text-sm tracking-wide">
                        Healing Hands
                    </p>

                </div>

            </div>

            <ul className="flex gap-10 text-[#7d6562] font-light">

                <li>
                    <a href="#inicio">
                        Inicio
                    </a>
                </li>

                <li>
                    <a href="#servicios">
                        Servicios
                    </a>
                </li>

                <li>
                    <a href="#sobre-mi">
                        Sobre mí
                    </a>
                </li>

                <li>
                    <a href="#beneficios">
                        Beneficios
                    </a>
                </li>

                <li>
                    <a href="#contacto">
                        Contacto
                    </a>
                </li>

                {token && (

                    <li>
                        <a href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                )}

                {token && rol === 'cliente' && (

                    <li>
                        <a href="/agendar">
                            Agendar
                        </a>
                    </li>
                )}

                {token && rol === 'admin' && (

                    <li>
                        <a href="/admin-citas">
                            Admin
                        </a>
                    </li>
                )}

            </ul>

            <div className="flex gap-4">

                {!token ? (

                    <a
                        href="/login"
                        className="bg-[#9b7774] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                    >
                        Login
                    </a>

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