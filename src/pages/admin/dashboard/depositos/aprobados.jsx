import useDepositStore from "../../../../store/depositStore"
import usePendientes from "../../../../hooks/usePendientes"
import useDeposits from "../../../../hooks/useDeposits"
import useLoadingStore from "../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"
const Aprobados = () => {
    const { loading } = useLoadingStore()
    const { updateDeposit } = useDeposits()
    const { formatDate, depositStatus } = usePendientes()
    const { deposits } = useDepositStore()
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
                    {deposits.filter(deposit => deposit.state === 2).length > 0 ? deposits.filter(deposit => deposit.state === 2).map((deposit) => {
                        return <tr key={deposit._id} >
                            <td>
                                {formatDate(deposit.depositDate)}
                            </td>
                            <td>{deposit.operation}</td>
                            <td>{deposit.monto}</td>
                            <td>{deposit.methodName}</td>
                            <td> {depositStatus(deposit.state)} </td>
                            <td className="td-buttons">
                                <div className="deposit-buttons">
                                    <button onClick={() => updateDeposit({ state: 3, _id: deposit._id })} className="btn btn-danger mx-1 mb-1"> Anular </button>
                                    <button onClick={() => updateDeposit({ state: 1, _id: deposit._id })} className="btn btn-warning mx-1 mb-1"> Pendiente </button>
                                </div>
                            </td>
                        </tr>
                    })
                        : <tr>
                            <td className="text-center p-4" colSpan={6}>
                                Sin depositos
                            </td>
                        </tr>
                    }
                </tbody>
            </table>}
        </div>
    )
}

export default Aprobados