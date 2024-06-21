import usePremiosStore from "../../../admin/dashboard/premios/premiosStore"

const ModalDatos = ({ setModalDatos, typeModal }) => {
    const { premioSelected } = usePremiosStore()

    // Render del modal para datos del premio
    if (typeModal === "data") return (<div className="bg-modal">
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
                    <button onClick={()=>setModalDatos(false)} className="btn text-danger mx-3"> Cerrar </button>
                    <button className="btn btn-primary" disabled> Reportar pago </button>
                    <button className="btn btn-primary"> Reportar pago </button>
                </div>
            </div>
        </div>
    </div>)

    // Render del modal para los datos del ticket
    if (typeModal === "ticket") return (<div className="bg-modal">
        <div className="card p-4 col-10 col-sm-8 col-md-4 col-lg-4 bg-gray">
            <b className="text-center">
            Ticket
            </b>
            <hr className="mt-0" />
            <div>
                <span className="d-block">Code: {premioSelected?.ticket?.code}</span>
                <span className="d-block">Jugadas: {premioSelected.ticket.animals.map(animal => (`${animal.id} `))}</span>
            </div>
            <hr className="" />
            <div className="text-end">
                <div>
                    <button onClick={()=>setModalDatos(false)} className="btn text-danger mx-3"> Cerrar </button>
                </div>
            </div>
        </div>
    </div>)

    // Render del modal para los datos del usuario
    if (typeModal === "user") return (<div className="bg-modal">
        <div className="card p-4 col-10 col-sm-8 col-md-4 col-lg-4 bg-gray">
            <b className="text-center">
        Usuario
            </b>
            <hr className="mt-0" />
            <div>
                <b className="d-block">{premioSelected.ticket.user.email}</b>
            </div>
            <hr className="" />
            <div className="text-end">
                <div>
                    <button onClick={()=>setModalDatos(false)} className="btn text-danger mx-3"> Cerrar </button>
                </div>
            </div>
        </div>
    </div>)

}

export default ModalDatos