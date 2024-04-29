/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useTicketStore from "../../../store/ticketStore"
import dateNow from "../../../services/dateNow"
import useNotify from "../../../hooks/useNotify"

const Print = () => {
    const { notify } = useNotify()
    const { setVisible, animals, setAnimals, ticketCode } = useTicketStore()
    const navigate = useNavigate()

    useEffect(() => {
        window.print()
        setAnimals([])
        setVisible(false)
        notify.success("Impresión en progreso")
        navigate('/dashboard/ventas')
    }, [])

    return (<div className="bg-dark text-light p-4 print">
        <div className="ticket-body p-3">
            <div>
                <div className="text-center">
                    <h2>apuestaslapolla.com</h2>
                    <div>NRO TICKET. 234 - <i>CODIGO: {ticketCode}</i></div>
                    <p className="text-center">
                        {dateNow.fecha} {dateNow.horas}:{dateNow.minutos}:{dateNow.seconds} {dateNow.periodo}
                    </p>
                </div>
                <div>----------------------------</div>
                <h4>
                    GRAN QUINIELA 25.BS
                </h4>
                <div>----------------------------</div>
                <div className="container-fluid mx-400">
                    <div className="row">
                        {animals.length > 0 && animals.map((animal, index) => {
                            return (
                                <div key={index} className="col-6">
                                    <div > {animal.id} {animal.name}, </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <br />
                <div>
                    <b>CADUCA A LOS 3 DIAS</b>
                </div>
                <div>
                    SIN TICKET NO COBRA
                </div>
                <div>.</div>
                <div>.</div>
            </div>
        </div>
    </div>)
}
export default Print