import usePagos from "../../../hooks/usePagos"
import { formatDate2, getTime2 } from '../../../services/formatDate'
const Pagos = () => {

    const { pagos, approveTransfer, declineransfer } = usePagos()

    if (!pagos.length) return (
        <div className="m-5 text-center">
            <h3>
                No has recibido pagos
            </h3>
        </div>
    )

    if (pagos.length) return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Usuario</th>
                        <th>Monto</th>
                        <th>Metoto de pago</th>
                        <th>Datos</th>
                        <th>Referencia</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pagos.map(pago => {
                        return (<tr key={pago._id}>
                            <td>{formatDate2(pago.createdAt)} - {getTime2(pago.createdAt)}</td>
                            <td>{pago.from.name}</td>
                            <td>{pago.amount}</td>
                            <td>{pago.payMethod.methodName} <img src={pago.payMethod.imageUrl} alt="" height={"50px"} /> </td>
                            <td>
                                <div>
                                    {pago.payMethod?.banco && pago.payMethod.banco}
                                </div>
                                <div>
                                    {pago.payMethod?.tipo && pago.payMethod.tipo}
                                </div>
                                <div>
                                    {pago.payMethod?.nombre && pago.payMethod.nombre}

                                </div>
                            </td>
                            <td>{pago.ref}</td>
                            <td>
                                {!pago.status ? <>
                                    <button onClick={() => approveTransfer(pago._id)} className="btn btn-success mx-3"> Aprobar </button>
                                    <button onClick={() => declineransfer(pago._id)} className="btn btn-danger"> Rechazar </button>
                                </> : pago.status === 1 ? <>
                                    <div className="alert alert-success"> Aprobado </div>
                                </> : <>
                                    <div className="alert alert-danger"> 
                                        Rechazado 
                                    </div>
                                </>}
                            </td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </>
    )
}

export default Pagos