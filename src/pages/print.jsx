/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useTicketStore from "../store/ticketStore"
import dateNow from "../services/dateNow"
import useNotify from "../hooks/useNotify"
const Print = () => {
    const { notify } = useNotify()
    const { setVisible, animals, setAnimals } = useTicketStore()
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
                    <div>Nro Ticket. 234 - <i>codigo: 368Y45</i></div>
                    <p className="text-center">
                        {dateNow.fecha} {dateNow.horas}:{dateNow.minutos}:{dateNow.seconds} {dateNow.periodo}
                    </p>
                </div>
                <hr />
                <h4>
                    Gran Quiniela 25Bs
                </h4>
                <hr />
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
                <hr />
                <div>
                    <b>caduca a los 3 dias</b>
                </div>
                <div>
                    Sin ticket no cobra
                </div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <hr />
            </div>
        </div>
    </div>)
}
export default Print