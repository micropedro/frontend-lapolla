/* eslint-disable react/prop-types */
import useDepositStore from "../../../../store/depositStore"
import usePendientes from "../../../../hooks/usePendientes"
/* import useDeposits from "../../../../hooks/useDeposits" */
import useLoadingStore from "../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"
const Aprobados = ({ id }) => {
    const { loading } = useLoadingStore()
    /*     const { updateDeposit } = useDeposits() */
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
                        {/*     <th>Opciones</th> */}
                    </tr>
                </thead>
                <tbody>
                    {deposits.filter(deposit => deposit.status === id).length > 0 ? deposits.filter(deposit => deposit.status === id).map((deposit) => {
                        return <tr key={deposit._id} >
                            <td>
                                {formatDate(deposit?.date)}
                            </td>
                            <td>{deposit?.operationRef}</td>
                            <td>{deposit?.amount}</td>
                            <td>{deposit?.adminMethod?.methodName || "Metodo eliminado"}</td>
                            <td>{depositStatus(deposit?.status)}</td>
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