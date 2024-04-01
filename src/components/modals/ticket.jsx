import useTicketStore from "@/store/ticketStore"
import dateNow from "@/services/dateNow"
import useTicket from "@/hooks/useTicket"
import { convertCeroNumber } from "@/services/utils"
import loadingStore from "@/store/loadingStore"
import Spinner from "@/components/spinner"
import { getTicketCode } from "@/services/utils"
import { useEffect } from "react"
const Ticket = () => {

    const { loading } = loadingStore()
    const { handlePrint } = useTicket()
    const { visible, setVisible, animals, setTicketCode } = useTicketStore()

    useEffect(() => setTicketCode(getTicketCode()), [])

    if (visible) return (<div className="bg-modal">
        <div className="ticket-body p-3">
            <div>
                <div className="text-center">
                    <h2>apuestaslapolla.com</h2>
                    <div>Nro Ticket. 234 - <i>Codigo: ******</i></div>
                    <p className="text-center">
                        {dateNow.fecha} {dateNow.horas}:{dateNow.minutos}:{dateNow.seconds} {dateNow.periodo}
                    </p>
                </div>
                <hr />
                <h4>
                    Gran Quiniela 25Bs
                </h4>
                <hr />
                <div className="container mx-400">
                    <div className="row">
                        {animals.length > 0 && animals.map((animal, index) => {
                            return (
                                <div key={index} className="col-6 mb-1">
                                    {animal.id === 37 ? "00" : convertCeroNumber(animal.id)} {animal.name.toUpperCase()}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr />
                <div>
                    <b>CADUCA A LOS 3 DIAS</b>
                </div>
                <div>
                    SIN TICKET NO COBRA
                </div>
                <hr />
            </div>
            <div>
                <button onClick={() => setVisible(false)} className="btn btn-danger ticket-button"> Cancelar </button>
                {loading ?
                    <button className="btn btn-primary px-5" >  <Spinner /> </button>
                    :
                    <button onClick={() => handlePrint()} className="btn btn-primary ticket-button"> Imprimir </button>
                }
            </div>
        </div>
    </div>)
}

export default Ticket