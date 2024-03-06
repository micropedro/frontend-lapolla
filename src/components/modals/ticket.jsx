/* eslint-disable react/prop-types */
import useTicketStore from "../../store/ticketStore"
import dateNow from "../../services/dateNow"
import { useNavigate } from "react-router-dom"
const Ticket = ({ animals }) => {
    const navigate = useNavigate()
    const hora = new Date()
    const minutos = hora.getMinutes()
    const horas = hora.getHours()
    const periodo = horas >= 12 ? 'PM' : 'AM';
    const seconds = hora.getSeconds()
    const { visible, setVisible } = useTicketStore()

    const handlePrint = () => {
        navigate("/print")
    }

    if (visible) return (<div className="bg-modal">
        <div className="ticket-body p-3">
            <div>
                <div className="text-center">
                    <h2>apuestaslapolla.com</h2>
                    <div>Nro Ticket. 234 - <i>codigo: 368Y45</i></div>
                    <p className="text-center">
                        {dateNow} {horas}:{minutos}:{seconds} {periodo}
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
                                <div key={index} className="col-6">
                                    <div > #{animal.id} {animal.name}, </div>
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
                <hr />
            </div>
            <div>
                <button onClick={() => setVisible(false)} className="btn btn-danger ticket-button"> Cancelar </button>
                <button onClick={() => handlePrint()} className="btn btn-primary ticket-button"> Imprimir </button>
            </div>
        </div>
    </div>)
}
export default Ticket