import ModalDatos from "./modalDatos"
const Premios = () => {
    return (<>
        <ModalDatos />
        <div className="flex-between">
            <h2 className="h2-plain">Pago de premios</h2>
            <div className="d-flex gap-2 mb-0">
                <button className="btn">Pendientes</button>
                <button className="btn">Aprobados</button>
            </div>
        </div>
        <hr className="m-0" />
        <table className="table">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th> Ticket </th>
                    <th>Premio</th>
                    <th>Vendedor</th>
                    <th>Datos de pago</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        13/06/2024 - 01:05 PM
                    </td>
                    <td>
                        <button className="btn btn-success"> <i className="bi bi-eye" /> Ver </button>
                    </td>
                    <td>
                        Bs. 45.700,00
                    </td>
                    <td>
                        Agencia: Maria Lopez <button className="bi bi-eye btn btn-success" />
                    </td>
                    <td>
                        <button className="btn btn-danger"> <i className="bi bi-eye" /> Ver datos </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </>)
}

export default Premios