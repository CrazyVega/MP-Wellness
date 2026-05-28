import { useState } from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'


function Login() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const [error, setError] = useState('')


    const login = async (e) => {

        e.preventDefault()

        setError('')

        try {

            const response = await axios.post(
                'http://127.0.0.1:8000/api/token/',
                {
                    username,
                    password
                }
            )

            localStorage.setItem(
                'token',
                response.data.access
            )
const userResponse = await axios.get(
    'http://127.0.0.1:8000/api/usuarios/me/',
    {
        headers: {
            Authorization: `Bearer ${response.data.access}`
        }
    }
)

localStorage.setItem(
    'rol',
    userResponse.data.rol
)
            navigate('/dashboard')

        } catch {

            setError('Credenciales incorrectas')
        }
    }


    return (

        <div className="min-h-screen flex items-center justify-center bg-[#f5f0ea] px-6">

            <div className="bg-white w-full max-w-md rounded-[40px] shadow-2xl p-12">

                <div className="text-center mb-10">

                    <h1 className="text-5xl text-[#9b7774] font-serif">
                        Bienvenido
                    </h1>

                    <p className="text-[#7d6562] mt-4">
                        Ingresa a Magaly Healing Hands
                    </p>

                </div>

                <form
                    onSubmit={login}
                    className="flex flex-col gap-6"
                >

                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                        className="border border-[#d9c8c3] rounded-full px-6 py-4 outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="border border-[#d9c8c3] rounded-full px-6 py-4 outline-none"
                    />

                    {error && (

                        <p className="text-red-500 text-center">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="bg-[#9b7774] text-white py-4 rounded-full text-lg hover:opacity-90 transition"
                    >
                        Iniciar sesión
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login