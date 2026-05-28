import { useState } from 'react'

import axios from 'axios'
import InternalNavbar from '../components/InternalNavbar'
import { useNavigate } from 'react-router-dom'


function Register() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')

    const [telefono, setTelefono] = useState('')

    const [password, setPassword] = useState('')


    const registro = async (e) => {

        e.preventDefault()

        try {

            await axios.post(
                'http://127.0.0.1:8000/api/registro/',
                {
                    username,
                    telefono,
                    password
                }
            )

            alert('Cuenta creada')

            navigate('/login')

        } catch (error) {

            console.log(error)
        }
    }


    return (

        <div className="min-h-screen bg-[#f5f0ea] p-20">
            <InternalNavbar />
            <div className="bg-white p-12 rounded-[40px] shadow-2xl w-full max-w-md">

                <h1 className="text-5xl text-[#9b7774] font-serif text-center mb-10">

                    Crear cuenta

                </h1>

                <form
                    onSubmit={registro}
                    className="flex flex-col gap-6"
                >

                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                        className="border border-[#d9c8c3] rounded-full px-6 py-4"
                    />

                    <input
                        type="text"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={(e) =>
                            setTelefono(e.target.value)
                        }
                        className="border border-[#d9c8c3] rounded-full px-6 py-4"
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="border border-[#d9c8c3] rounded-full px-6 py-4"
                    />

                    <button
                        type="submit"
                        className="bg-[#9b7774] text-white py-4 rounded-full text-lg"
                    >
                        Registrarse
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Register