import { useEffect, useState } from 'react'

import axios from 'axios'


function AdminCitas() {

    const [citas, setCitas] = useState([])

    const token = localStorage.getItem('token')


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

            console.log(error)
        }
    }


    const cambiarEstado = async (id, estado) => {

        try {

            await axios.patch(
                `http://127.0.0.1:8000/api/citas/${id}/`,
                {
                    estado
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            obtenerCitas()

        } catch (error) {

            console.log(error)
        }
    }


    return (

        <div className="min-h-screen bg-[#f5f0ea] p-20">

            <div className="mb-14">

                <h1 className="text-6xl text-[#9b7774] font-serif">

                    Administración de citas

                </h1>

                <p className="text-[#7d6562] mt-4 text-xl">

                    Gestión completa de citas y pacientes.

                </p>

            </div>

            <div className="grid gap-8">

                {citas.map((cita) => (

                    <div
                        key={cita.id}
                        className="bg-white rounded-[40px] p-10 shadow-lg"
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <h2 className="text-3xl text-[#9b7774] font-serif">

                                    {cita.servicio_nombre}

                                </h2>

                                <p className="text-[#7d6562] mt-3">

                                    Cliente: {cita.cliente_nombre}

                                </p>

                                <p className="text-[#7d6562]">

                                    Fecha: {cita.fecha}

                                </p>

                                <p className="text-[#7d6562]">

                                    Hora: {cita.hora}

                                </p>

                                <p className="text-[#7d6562]">

                                    Estado: {cita.estado}

                                </p>

                            </div>

                            <div className="flex gap-4">

                                <button
                                    onClick={() =>
                                        cambiarEstado(
                                            cita.id,
                                            'confirmada'
                                        )
                                    }
                                    className="bg-green-600 text-white px-5 py-3 rounded-full"
                                >
                                    Confirmar
                                </button>

                                <button
                                    onClick={() =>
                                        cambiarEstado(
                                            cita.id,
                                            'cancelada'
                                        )
                                    }
                                    className="bg-red-500 text-white px-5 py-3 rounded-full"
                                >
                                    Cancelar
                                </button>

                                <button
                                    onClick={() =>
                                        cambiarEstado(
                                            cita.id,
                                            'finalizada'
                                        )
                                    }
                                    className="bg-[#9b7774] text-white px-5 py-3 rounded-full"
                                >
                                    Finalizar
                                </button>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default AdminCitas