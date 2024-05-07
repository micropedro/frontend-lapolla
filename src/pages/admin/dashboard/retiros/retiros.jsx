import { Spinner } from "react-bootstrap"
import useLoadingStore from "../../../../store/loadingStore"
import formatDate from "../../../../services/formatDate"
import useRetiros from "../../../../hooks/useRetiros"

const Retiros = () => {
    const { retiros, handleModal } = useRetiros()
    const { loading } = useLoadingStore()
    return (
        <div className="mt-4">
            <h2>Retiros</h2>
            <hr />
            <div>
                {loading ? <div className="text-center py-5">
                    <Spinner />
                </div> : <table className="table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Monto</th>
                            <th>Status</th>
                            <th>Metodo</th>
                            <th>Reportar Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        {retiros.filter(_retiro => _retiro.state === 1).length > 0 ? retiros.filter(retiro => retiro.state === 1).map((retiro) => {
                            return <tr key={retiro._id} >
                                <td>
                                    {formatDate(retiro.date)}
                                </td>
                                <td>{retiro.amount}</td>
                                <td>{retiro.state}</td>
                                <td> {retiro.payMethod.methodName}
                                    <button onClick={()=>handleModal(retiro)} className="btn border text-primary border-primary btn-sm">
                                        <i className="bi bi-eye-fill" /> ver
                                    </button>
                                </td>
                                <td className="td-buttons">
                                    <div className="deposit-buttons">
                                        <button onClick={()=>handleModal(retiro)} className="btn btn-success mb-1 mw-1"> Reportar Pago </button>
                                    </div>
                                </td>
                            </tr>
                        })
                            : <tr>
                                <td className="text-center p-4" colSpan={6}>
                                    Sin retiros
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>}
            </div>

        </div>

    )
}

export default Retiros