import { formatDate2,nivel } from "../../../../services/formatDate"
import usePremiosStore from "../../../admin/dashboard/premios/premiosStore"

const ModalDatos = ({ setModalDatos, typeModal }) => {
    const { premioSelected, modalDatos } = usePremiosStore()

    // Render del modal para datos del premio
    if (typeModal === "data" && modalDatos) return (<div className="bg-modal">
        <div className="card p-4 col-10 col-sm-8 col-md-4 col-lg-4 bg-gray">
            <b className="text-center">
                Datos Del pago
            </b>
            <hr className="mt-0" />
            <div>
                <b className="d-block">{premioSelected.ticket.user.email}</b>
                <i className="bi bi-credit-card" /> Pago Movil
                <div>CI: 20.853.601</div>
                Telefono: 04141220527
                <div> Banco: Venezuela (0102) </div>
            </div>
            <hr className="" />
            <div className="text-end">
                <div className="text-start mb-3">
                    <label htmlFor="">Referencia</label>
                    <input placeholder="Ingresa el numero de referencia" className="form-control" />
                </div>
                <div>
                    <button onClick={() => setModalDatos(false)} className="btn text-danger mx-3"> Cerrar </button>
                    <button className="btn btn-primary" disabled> Reportar pago </button>
                    <button className="btn btn-primary"> Reportar pago </button>
                </div>
            </div>
        </div>
    </div>)

    // Render del modal para los datos del ticket
    if (typeModal === "ticket" && modalDatos) return (<div className="bg-modal">
        <div className="card p-4 col-10 col-sm-8 col-md-4 col-lg-4 bg-gray">
            <b className="text-center">
                Ticket
            </b>
            <hr className="mt-0" />
            <div>
                <span className="d-block">Codigo:
                    {premioSelected?.ticket?.count}-{premioSelected?.ticket?.code}
                </span>
                <span className="d-block">Jugadas:
                    {premioSelected.ticket.animals.map((animal, index) => (`${animal.id === 37 ? "00" : animal.id} ${premioSelected.ticket.animals.length > index + 1 ? ',' : ""} `))}
                </span>
                <div>Ganador: {premioSelected?.ticket?.user.name}</div>
                <div>Quiniela: {premioSelected?.ticket?.idQuiniela}</div>
                <div>Fecha: {formatDate2(premioSelected?.ticket.date)}</div>
            </div>
            <hr className="" />
            <div className="text-end">
                <div>
                    <button onClick={() => setModalDatos(false)} className="btn text-danger mx-3"> Cerrar </button>
                </div>
            </div>
        </div>
    </div>)

    // Render del modal para los datos del usuario
    if (typeModal === "user" && modalDatos) return (<div className="bg-modal">
        <div className="card p-4 col-10 col-sm-8 col-md-4 col-lg-4 bg-gray">
            <b className="text-center">
                Usuario
            </b>
            <hr className="mt-0" />
            <div>
                <h4 className="d-block mb-0">{premioSelected.ticket.user.name}</h4>
            </div>
            <div className="d-flex text-gray mb-2">
                Tipo: <b className="d-block">{nivel[premioSelected.ticket.user.level]}</b>
            </div>
            <div className="d-flex">
                CI: <b className="d-block">{premioSelected.ticket.user.ci}</b>
            </div>
            <div className="d-flex">
                Emial: <b className="d-block">{premioSelected.ticket.user.email}</b>
            </div>
            <div className="d-flex">
                Saldo: <b className="d-block">{premioSelected.ticket.user.balance}</b>
            </div>
            <div className="d-flex">
                Prepagado: <b className="d-block">{premioSelected.ticket.user.prepaid ? "Si" : "No"}</b>
            </div>

            <hr className="" />
            <div className="text-end">
                <div>
                    <button onClick={() => setModalDatos(false)} className="btn text-danger mx-3"> Cerrar </button>
                </div>
            </div>
        </div>
    </div>)

}

export default ModalDatos