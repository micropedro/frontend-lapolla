import usePendientes from "../../../../hooks/usePendientes"
import useDeposits from "../../../../hooks/useDeposits"
import useLoadingStore from "../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"
const Pendientes = () => {
    const { loading } = useLoadingStore()
    const { updateDeposit, deposits } = useDeposits()
    const { formatDate, depositStatus } = usePendientes()
    return (
        <div>
            {loading ? <div className="text-center py-5">
                <Spinner />
            </div> : <table className="table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Comprobante</th>
                        <th>Monto</th>
                        <th>Metodo</th>
                        <th>Status</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {deposits.filter(deposit => deposit.status === 1).length > 0 ? deposits.filter(deposit => deposit.status === 1).map((deposit) => {
                        return <tr key={deposit._id} >
                            <td>
                                {formatDate(deposit.date)}
                            </td>
                            <td>{deposit.operationRef}</td>
                            <td>
                                {deposit.amount}
                            </td>
                            <td>
                                {deposit.adminMethod?.methodName || "Error: "+deposit._id}
                            </td>
                            <td> {depositStatus(deposit.status)} </td>
                            <td className="td-buttons">
                                <div className="deposit-buttons">
                                    <button onClick={() => updateDeposit({ status: 2, _id: deposit._id })} className="btn btn-success btn-sm mx-1 mb-1"> Aprobar </button>
                                    <button onClick={() => updateDeposit({ status: 3, _id: deposit._id })} className="btn btn-danger btn-sm mx-1 mb-1"> Rechazar </button>
                                </div>
                            </td>
                        </tr>
                    })
                        : <tr>
                            <td className="text-center p-4" colSpan={6}>
                                Sin depositos Pendientes
                            </td>
                        </tr>
                    }
                </tbody>
            </table>}
        </div>
    )
}

export default Pendientes