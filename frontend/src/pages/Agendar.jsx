import { useEffect, useState } from 'react'
import InternalNavbar from '../components/InternalNavbar'
import axios from 'axios'


function Agendar() {

    const [servicios, setServicios] = useState([])

    const [terapeutas, setTerapeutas] = useState([])

    const [servicio, setServicio] = useState('')

    const [terapeuta, setTerapeuta] = useState('')

    const [fecha, setFecha] = useState('')

    const [hora, setHora] = useState('')

    const [observaciones, setObservaciones] = useState('')


    const token = localStorage.getItem('token')


    useEffect(() => {

        obtenerServicios()

        obtenerTerapeutas()

    }, [])


    const obtenerServicios = async () => {

        try {

            const response = await axios.get(
                'http://127.0.0.1:8000/api/servicios/',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setServicios(response.data)

        } catch (error) {

            console.log(error)
        }
    }


    const obtenerTerapeutas = async () => {

        try {

            const response = await axios.get(
                'http://127.0.0.1:8000/api/terapeutas/',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setTerapeutas(response.data)

        } catch (error) {

            console.log(error)
        }
    }


    const crearCita = async (e) => {

        e.preventDefault()

        try {

            await axios.post(
                'http://127.0.0.1:8000/api/citas/',
                {
                    servicio,
                    terapeuta,
                    fecha,
                    hora,
                    observaciones
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            alert('Cita creada correctamente')

        } catch (error) {

            console.log(error)

            alert('Error creando cita')
        }
    }


    return (
<div className="min-h-screen bg-[#f5f0ea] p-0">
            <InternalNavbar />
        <div className="min-h-screen bg-[#f5f0ea] flex justify-center items-center px-6 py-20">
            
            <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl p-12">

                <h1 className="text-5xl text-[#9b7774] font-serif text-center mb-10">

                    Agendar cita

                </h1>

                <form
                    onSubmit={crearCita}
                    className="flex flex-col gap-6"
                >

                    <select
                        value={servicio}
                        onChange={(e) =>
                            setServicio(e.target.value)
                        }
                        className="border border-[#d9c8c3] rounded-full px-6 py-4"
                    >

                        <option value="">
                            Seleccionar servicio
                        </option>

                        {servicios.map((item) => (

                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.nombre}
                            </option>
                        ))}

                    </select>


                    <select
                        value={terapeuta}
                        onChange={(e) =>
                            setTerapeuta(e.target.value)
                        }
                        className="border border-[#d9c8c3] rounded-full px-6 py-4"
                    >

                        <option value="">
                            Seleccionar terapeuta
                        </option>

                        {terapeutas.map((item) => (

                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.username}
                            </option>
                        ))}

                    </select>


                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) =>
                            setFecha(e.target.value)
                        }
                        className="border border-[#d9c8c3] rounded-full px-6 py-4"
                    />


                    <input
                        type="time"
                        value={hora}
                        onChange={(e) =>
                            setHora(e.target.value)
                        }
                        className="border border-[#d9c8c3] rounded-full px-6 py-4"
                    />


                    <textarea
                        placeholder="Observaciones"
                        value={observaciones}
                        onChange={(e) =>
                            setObservaciones(e.target.value)
                        }
                        className="border border-[#d9c8c3] rounded-[30px] px-6 py-4 h-40 resize-none"
                    />


                    <button
                        type="submit"
                        className="bg-[#9b7774] text-white py-4 rounded-full text-lg hover:opacity-90 transition"
                    >
                        Crear cita
                    </button>

                </form>

            </div>

        </div>
        </div>
    )
}

export default Agendar