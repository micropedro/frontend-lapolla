import useTicketStore from "../../store/ticketStore"
import useTicket from "../../hooks/useTicket"
import { convertCeroNumber, jugandoPara } from "../../services/utils"
import loadingStore from "../../store/loadingStore"
import useConfig from "../../hooks/useConfig"
import Spinner from "../../components/spinner"
import { formatDate2, getTime2 } from "../../services/formatDate"

const ClientTicket = () => {

    const { loading } = loadingStore()
    const { saveTicketClient } = useTicket()
    const { config } = useConfig()
    const { visible, setVisible, animals } = useTicketStore()

    if (visible) return (<div className="bg-modal p-2">
        <div className="card p-3">
            <div>
                <div className="text-center">
                    <h4>apuestaslapolla.com</h4>

                    <p className="text-center">
                        {formatDate2(Date.now())} -
                        {getTime2(Date.now())}
                    </p>
                </div>
                <hr />
                <h4 className="text-center">
                    {animals.length === 4 ? `Mini Quiniela ${config.precioMiniQuiniela} Bs` : `Gran Quiniela ${config.precioGranQuiniela} Bs`}
                </h4>
                <div className="text-center">Jugando  {jugandoPara()} </div>
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