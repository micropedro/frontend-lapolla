import { Spinner } from "react-bootstrap"
import useLoadingStore from "../../../../store/loadingStore"
import useRetiros from "../../../../hooks/useRetiros"
import formatDate from "../../../../services/formatDate"
import Status from "../../../../components/Status"
const Aproved = () => {
    const { retiros } = useRetiros()
    const { loading } = useLoadingStore()
    return (
        <div className="mt-0">
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
                        </tr>
                    </thead>
                    <tbody>
                        {retiros.filter(_retiro => _retiro.state === 2).length > 0 ? retiros.filter(retiro => retiro.state === 2).map((retiro) => {
                            return <tr key={retiro._id} >
                                <td>{formatDate(retiro.date)}</td>
                                <td>{retiro.amount}</td>
                                <td>
                                    <Status status={retiro.state} />
                                </td>
                                <td> {retiro.payMethod.methodName}</td>
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

export default Aproved