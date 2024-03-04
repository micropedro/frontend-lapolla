/* eslint-disable react/prop-types */
import useTicketStore from "../../store/ticketStore"
import dateNow from "../../services/dateNow"
const Ticket = ({ animals }) => {
    const { visible, setVisible } = useTicketStore()
    if (visible) return (<div className="bg-modal">
        <div className="ticket-body p-3">
            <div>
                <h2>apuestaslapolla.com</h2>
                <div>Nro Ticket. 234</div>
                <i>codigo: 368Y45</i>
                <hr />
                <h4>
                    Gran Quiniela 25Bs
                </h4>
                <hr />
                <div className="flex-between">
                    <p>Tu jugada:</p>
                    <p> {dateNow} </p>
                </div>
                {animals.length > 0 && animals.map((animal, index) => {
                    return <div key={index}> #{animal.id} {animal.name} </div>
                })}
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
                <button className="btn btn-primary ticket-button"> Confirmar </button>
            </div>
        </div>
    </div>)
}
export default Ticket