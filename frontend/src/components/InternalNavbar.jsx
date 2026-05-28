import logo from '../assets/logo.png'

function InternalNavbar() {

    const rol = localStorage.getItem('rol')

    return (

        <nav className="w-full flex justify-between items-center px-16 py-6 bg-[#f5f0ea] shadow-sm">

            {/* LOGO */}

            <a
                href="/"
                className="flex items-center gap-4"
            >

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

            </a>


            {/* MENU */}

            <div className="flex items-center gap-6">

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

        </nav>
    )
}

export default InternalNavbar