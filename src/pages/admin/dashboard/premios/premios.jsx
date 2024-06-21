import ModalDatos from "./modalDatos"
import usePremios from "./usePremios"
import { formatDate2, getTime2 } from "../../../../services/formatDate"

const Premios = () => {

    const { premios, modalDatos, setModalDatos, setTypeModal, typeModal, setPremioSelected } = usePremios()

    const handleModal = (typeModal, premio) => {
        setPremioSelected(premio)
        setTypeModal(typeModal)
        setModalDatos(true)
    }

    return (<>
        {modalDatos && <ModalDatos typeModal={typeModal} setModalDatos={setModalDatos} />}
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
                {premios.map( premio => {
                    return (
                        <tr key={premio._id}>
                            <td>
                                {`${formatDate2(premio.date)} - ${getTime2(premio.date)}`}
                            </td>
                            <td>
                                <button onClick={() => handleModal("ticket", premio)}  className="btn btn-success"> <i className="bi bi-eye" /> Ver </button>
                            </td>
                            <td>
                        Bs. {premio?.amount || 0}
                            </td>
                            <td>
                        Agencia: {premio?.ticket?.user?.name || ""} <button onClick={() => handleModal("user", premio)} className="bi bi-eye btn btn-success" />
                            </td>
                            <td>
                                <button onClick={() => handleModal("data", premio)} className="btn btn-danger"> <i className="bi bi-eye" /> Ver datos </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>)
}

export default Premios