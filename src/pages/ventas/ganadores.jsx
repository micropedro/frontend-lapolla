const Ganadores = () => {
    return (
        <div className="container px-5 py-2">
            <div className="row justify-content-center">
                <div className="col-10">
                    <h3>Comprobacion de ganadores</h3>
                    <input type="text" placeholder="Ingresar codigo del ticket" className="form-control" />
                    <button className="btn btn-primary px-5 btn-lg my-4"> Comprobar </button>

                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 text-center">
                    <div className="winer-ticket">
                        <h1>Ticket Ganador <i className="winer-icon bi bi-check-circle-fill " /></h1>
                        <div>Nombre: Manuel Perez </div>
                        <div>Nro ticket: 1232 </div>
                        <div>Codigo: woie738 </div>
                        <div>Gran Quiniela: 27/08/2024  </div>
                        <h3 className="premio">Premio: Bs. 95.000</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ganadores