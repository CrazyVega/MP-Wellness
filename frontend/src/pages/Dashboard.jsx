import { useEffect, useState } from 'react'

import axios from 'axios'


function Dashboard() {

    const [citas, setCitas] = useState([])

    const token = localStorage.getItem('token')
console.log(token)

    useEffect(() => {

        obtenerCitas()

    }, [])


    const obtenerCitas = async () => {

        try {

            const response = await axios.get(
                'http://127.0.0.1:8000/api/citas/',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setCitas(response.data)

        } catch (error) {

            console.log(error.response)
        }
    }


    return (

        <div className="min-h-screen bg-[#f5f0ea] p-20">

            <div className="mb-12">

                <h1 className="text-6xl text-[#9b7774] font-serif">

                    Mis citas

                </h1>

                <p className="text-[#7d6562] mt-4 text-xl">

                    Gestión y seguimiento de citas.

                </p>

            </div>

            <div className="grid gap-8">

                {citas.map((cita) => (

                    <div
                        key={cita.id}
                        className="bg-white rounded-[35px] p-8 shadow-lg"
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <h2 className="text-3xl text-[#9b7774] font-serif">

                                    {cita.servicio_nombre}

                                </h2>

                                <p className="text-[#7d6562] mt-2">

                                    Fecha: {cita.fecha}

                                </p>

                                <p className="text-[#7d6562]">

                                    Hora: {cita.hora}

                                </p>

                                <p className="text-[#7d6562]">

                                    Terapeuta: {cita.terapeuta_nombre || 'Sin asignar'}

                                </p>

                            </div>

                            <div>

                                <span className="bg-[#9b7774] text-white px-6 py-3 rounded-full">

                                    {cita.estado}

                                </span>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Dashboard