import { useEffect, useState } from 'react'

import axios from 'axios'

import InternalNavbar from '../components/InternalNavbar'


function Dashboard() {

    const [citas, setCitas] = useState([])

    const token = localStorage.getItem('token')

    const rol = localStorage.getItem('rol')


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


    const finalizarCita = async (id) => {

        try {

            await axios.patch(
                `http://127.0.0.1:8000/api/citas/${id}/`,
                {
                    estado: 'finalizada'
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

        <div className="min-h-screen bg-[#f5f0ea]">

            <InternalNavbar />

            <div className="p-20">


                {/* HEADER */}

                <div className="mb-14">

                    <h1 className="text-6xl text-[#9b7774] font-serif">

                        Citas

                    </h1>

                    <p className="text-[#7d6562] mt-4 text-xl">

                        Bienvenido a Magaly Healing Hands

                    </p>

                </div>


                {/* TARJETAS ADMIN */}

                {rol === 'admin' && (

                    <div className="grid md:grid-cols-3 gap-8 mb-16">

                        <div className="bg-white p-10 rounded-[35px] shadow-lg">

                            <h2 className="text-5xl text-[#9b7774] font-serif">

                                {citas.length}

                            </h2>

                            <p className="text-[#7d6562] mt-3">

                                Total citas

                            </p>

                        </div>

                        <div className="bg-white p-10 rounded-[35px] shadow-lg">

                            <h2 className="text-5xl text-[#9b7774] font-serif">

                                {
                                    citas.filter(
                                        cita =>
                                        cita.estado === 'pendiente'
                                    ).length
                                }

                            </h2>

                            <p className="text-[#7d6562] mt-3">

                                Pendientes

                            </p>

                        </div>

                        <div className="bg-white p-10 rounded-[35px] shadow-lg">

                            <h2 className="text-5xl text-[#9b7774] font-serif">

                                {
                                    citas.filter(
                                        cita =>
                                        cita.estado === 'confirmada'
                                    ).length
                                }

                            </h2>

                            <p className="text-[#7d6562] mt-3">

                                Confirmadas

                            </p>

                        </div>

                    </div>
                )}


                {/* BOTÓN AGENDAR CLIENTE */}

                {rol === 'cliente' && (

                    <div className="mb-12">

                        <a
                            href="/agendar"
                            className="bg-[#9b7774] text-white px-8 py-4 rounded-full text-lg"
                        >
                            Agendar nueva cita
                        </a>

                    </div>
                )}


                {/* LISTADO */}

                <div className="grid gap-8">

                    {citas.map((cita) => (

                        <div
                            key={cita.id}
                            className="bg-white rounded-[35px] p-10 shadow-lg"
                        >

                            <div className="flex justify-between items-center">

                                <div>

                                    <h2 className="text-3xl text-[#9b7774] font-serif">

                                        {cita.servicio_nombre}

                                    </h2>

                                    <p className="text-[#7d6562] mt-3">

                                        Fecha: {cita.fecha}

                                    </p>

                                    <p className="text-[#7d6562]">

                                        Hora: {cita.hora}

                                    </p>

                                    <p className="text-[#7d6562]">

                                        Estado: {cita.estado}

                                    </p>

                                    {rol === 'admin' && (

                                        <p className="text-[#7d6562]">

                                            Cliente:
                                            {' '}
                                            {cita.cliente_nombre}
                                        </p>
                                    )}

                                </div>


                                {/* BOTÓN TERAPEUTA */}

                                {rol === 'terapeuta' && (

                                    <button
                                        onClick={() =>
                                            finalizarCita(cita.id)
                                        }
                                        className="bg-[#9b7774] text-white px-6 py-3 rounded-full"
                                    >
                                        Finalizar
                                    </button>
                                )}

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Dashboard