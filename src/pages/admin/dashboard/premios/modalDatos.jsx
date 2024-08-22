import { Spinner } from "react-bootstrap"
import { formatDate2 } from "../../../../services/formatDate"
import usePremiosStore from "../../../admin/dashboard/premios/premiosStore"
import usePremios from "./usePremios"

const ModalDatos = ({ setModalDatos, typeModal }) => {

    const { handleSubmit, closeModal, input, setInput, loading } = usePremios()
    const { premioSelected, modalDatos } = usePremiosStore()

    // Render del modal para datos del ganador del premio
    if (typeModal === "data" && modalDatos) return (<div className="bg-modal">
        <div className="card p-4 col-10 col-sm-8 col-md-4 col-lg-4 bg-gray text-lg">
            {loading ?
                <div className="text-center py-5">
                    <Spinner />
                </div> : <>
                    <b className="flex-between mb-1">
                        <span></span>
                        <span>
                            Datos del ganador
                        </span>
                        <span>
                            <button onClick={closeModal} className="btn text-danger"> <i className="bi bi-x-circle-fill text-lg" /> </button>
                        </span>
                    </b>
                    <hr className="mt-0" />
                    <div>
                        <div className="d-flex">
                            <div className="person-icon">
                                <i className="bi bi-person" />
                            </div>
                            <div className="text-medium">
                                <div className="text-name-winner ">{premioSelected?.userData?.name}</div>
                                <div className="mt-1">Telefono: {premioSelected?.userData?.phone}</div>
                                <div> Cedula: {premioSelected?.userData?.ci}</div>
                            </div>
                        </div>
                        <hr className="mt-0" />
                        <div>
                            <i className="bi bi-credit-card" />
                            <span className="mx-2">{premioSelected?.payMethod?.name} </span>
                        </div>

                        <div> Nro de Cuenta: {premioSelected?.payMethod?.cuenta}</div>
                        <div> Banco: {premioSelected?.payMethod?.bank}</div>
                        <div>Tipo de cuenta: {premioSelected?.payMethod?.type}</div>
                    </div>
                    <hr className="" />
                    <div className="text-end">
                        {!premioSelected.status ?
                            <form onSubmit={(e) => handleSubmit(e, premioSelected._id)}>
                                <div className="text-start mb-3">
                                    <div className="flex-between">
                                        <label htmlFor="">Referencia</label>
                                        <div className="text-secondary">
                                            {input}
                                        </div>
                                    </div>
                                    <input required onChange={(e) => setInput(e.target.value)} placeholder="Ingresa el numero de referencia" className="form-control" name="ref" />
                                </div>
                                <div>
                                    <button onClick={closeModal} className="btn text-danger mx-3"> Cerrar </button>
                                    {input ?
                                        <button className="btn btn-primary"> Reportar pago </button>
                                        :
                                        <button className="btn btn-primary" disabled> Reportar pago </button>
                                    }
                                </div>
                            </form> : <div className="alert alert-success text-center">
                                Pago realizado !
                            </div>
                        }
                    </div>
                </>
            }
        </div>
    </div >)

    // Render del modal para los datos del ticket
    if (typeModal === "ticket" && modalDatos) return (<div className="bg-modal">
        <div className="card p-4 col-10 col-sm-8 col-md-4 col-lg-4 bg-gray">
            <b className="flex-between mb-1">
                <span></span>
                <span>
                    Ticket
                </span>
                <span>
                    <button onClick={() => setModalDatos(false)} className="btn text-danger"> <i className="bi bi-x-circle-fill text-lg" /> </button>
                </span>
            </b>
            <hr className="mt-0" />
            <div className="text-lg">
                <div className="text-center mb-2">
                    <span className="">
                        {premioSelected?.ticket?.quinielaType === "1" && "Gran Quiniela 24 horas"}
                        {premioSelected?.ticket?.quinielaType === "2" && "Mini Quiniela 3 a 7 pm"}
                    </span>
                </div>
                <span className="flex-between">
                    <span>Codigo:</span>
                    <b>
                        {premioSelected?.ticket?.count}-{premioSelected?.ticket?.code}
                    </b>
                </span>
                <span className="flex-between">
                    <span>Jugadas:</span>
                    <div className="d-flex text-center">
                        {premioSelected.ticket.animals.map((animal, index) => {
                            return (<div className="span-id-animals" key={index}> {animal.id === 37 ? "00" : animal.id}</div>)
                        })}
                    </div>
                </span>
                <div className="flex-between">
                    <span>
                        Agencia:
                    </span>
                    <b>{premioSelected?.ticket?.user.name}</b>
                </div>
                <div className="flex-between">
                    <span>Quiniela:</span>
                    <b>{premioSelected?.ticket?.idQuiniela}</b>
                </div>
                <div className="flex-between">
                    <span>Fecha:</span>
                    <b>{formatDate2(premioSelected?.ticket.date)}</b>
                </div>
            </div>
            <hr className="" />
            <div className="text-end">
                <div>
                    <button onClick={() => setModalDatos(false)} className="btn text-danger mx-3"> Cerrar </button>
                </div>
            </div>
        </div>
    </div>)

    // Render del modal para los datos de la agencia
    if (typeModal === "user" && modalDatos) return (<div className="bg-modal">
        <div className="card p-4 col-10 col-sm-8 col-md-4 col-lg-4 bg-gray text-lg">
            <b className="flex-between mb-1">
                <span></span>
                <span>
                    Datos agencia
                </span>
                <span>
                    <button onClick={() => setModalDatos(false)} className="btn text-danger"> <i className="bi bi-x-circle-fill text-lg" /> </button>
                </span>
            </b>
            <hr className="mt-0" />
            <div>
                <span className="flex-between">
                    <span>Nombre: </span>
                    <b>
                        {premioSelected.ticket.user.name}
                    </b>
                </span>
            </div>
            <span className="flex-between">
                <span>
                    CI:
                </span>
                <span>
                    <b className="d-block">{premioSelected.ticket.user.ci}</b>
                </span>
            </span>
            <div className="flex-between">
                <span>
                    Emial:
                </span>
                <b className="d-block">{premioSelected.ticket.user.email}</b>
            </div>
            <div className="flex-between">
                <span>Saldo:</span>
                <b className={premioSelected.ticket.user.balance < 0 ? "text-danger" : "text-success"}>{premioSelected.ticket.user.balance} BS</b>
            </div>
            <div className="flex-between">
                <span>Agencia postpago</span>
                <b className="d-block">{premioSelected.ticket.user.prepaid ? "No" : "Si"}</b>
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