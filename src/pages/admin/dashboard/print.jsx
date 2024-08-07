/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useTicketStore from "../../../store/ticketStore"
import dateNow from "../../../services/dateNow"
import useNotify from "../../../hooks/useNotify"
import { fechaJuego,$last } from "../../../services/utils"

const Print = () => {
    const { notify } = useNotify()
    const { setVisible, animals, setAnimals, ticketData } = useTicketStore()
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
                    <h4>apuestaslapolla.com</h4>
                    <div> Nro Ticket. {ticketData?.count} - <i>CODIGO: {ticketData.code}</i></div>
                    <p className="text-center">
                        <div>
                            comprado el {dateNow.dia}-{dateNow.mes}-{dateNow.anio}
                        </div>
                        <div>
                            a las {dateNow.horas}:{dateNow.minutos}:{dateNow.seconds} {dateNow.periodo}
                        </div>
                    </p>
                </div>
                <div>----------------------------</div>
                <h4>
                    {ticketData.quinielaType === "1" ? "GRAN" : "MINI"} QUINIELA 25.BS
                    {console.log("ticketData:", ticketData)}
                    {console.log("ticketData:", ticketData)}
                </h4>
                
                <div>
                    Para jugar el: {fechaJuego(Number(ticketData.quinielaType))}
                </div>
                <div>
                    Quiniela: {$last(6,ticketData?.quiniela)}
                </div>
                <div>----------------------------</div>
                <div> Resultados tomados de: </div>
                Loto Activo, la Granjita, Ruletactiva
                <div className="container-fluid mx-400">
                    <div className="row">
                        {animals.length > 0 && animals.map((animal, index) => {
                            return (
                                <div key={index} className="col-6">
                                    <div > {animal.id === 37 ? "00" : animal.id === 0 ? animal.id : String(animal.id).padStart(2,"0")} {animal.name}, </div>
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