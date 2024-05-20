import useTicketStore from "../../store/ticketStore"
import dateNow from "../../services/dateNow"
import useTicket from "../../hooks/useTicket"
import { convertCeroNumber } from "../../services/utils"
import loadingStore from "../../store/loadingStore"
import useConfig from "../../hooks/useConfig"
import Spinner from "../../components/spinner"
// import urlApi from "../../services/urlApi"
// import request from "../../services/request"

const ClientTicket = () => {

    const { loading } = loadingStore()
    const { saveTicketClient } = useTicket()
    const { config } = useConfig()
    const { visible, setVisible, animals, ticketCode } = useTicketStore()

    if (visible) return (<div className="bg-modal">
        <div className="ticket-body p-3">
            <div>
                <div className="text-center">
                    <h2>apuestaslapolla.com</h2>
                    <div>Nro Ticket - <i>Codigo: {ticketCode}</i></div>
                    <p className="text-center">
                        {dateNow.fecha} {dateNow.horas}:{dateNow.minutos}:{dateNow.seconds} {dateNow.periodo}
                    </p>
                </div>
                <hr />
                <h4>
                    {animals.length === 3 ? `Mini Quiniela ${config.precioMiniQuiniela} Bs` : `Gran Quiniela ${config.precioGranQuiniela} Bs`}
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
                <hr />
            </div>
            <div>
                <button onClick={() => setVisible(false)} className="btn btn-danger ticket-button"> Cancelar </button>
                {loading ?
                    <button className="btn btn-primary px-5" >  <Spinner /> </button>
                    :
                    <button onClick={() => saveTicketClient()} className="btn btn-primary ticket-button"> Aceptar </button>
                }
            </div>
        </div>
    </div>)
}

export default ClientTicket