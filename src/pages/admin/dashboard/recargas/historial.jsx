import { Spinner } from "react-bootstrap"
import { useHistorialRec } from "../../../../hooks/useHistorialRec"
import fromatDate, { getTime2 } from '../../../../services/formatDate'
import useLoadingStore from '../../../../store/loadingStore'
const Historial = () => {
    const { loading } = useLoadingStore()
    const { recargas } = useHistorialRec()

    return (
        <> {loading ? <div className="text-center p-5"> <Spinner /> </div> :
            <table className="table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Envia</th>
                        <th>Recibe</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {recargas.length && recargas.map(item => {
                        return <tr key={item._id}>
                            <td> {fromatDate(item.date)} - {getTime2(item.date)} </td>
                            <td>
                                {item.from.name} {item.from.ci}
                            </td>
                            <td> {item.to.name} </td>
                            <td> Bs. {item.amount} </td>
                        </tr>
                    })}
                </tbody>
            </table>
        }
        </>
    )
}

export default Historial