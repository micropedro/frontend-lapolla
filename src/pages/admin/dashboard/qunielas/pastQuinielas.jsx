import { Spinner } from "react-bootstrap"
import useQuinielas from "../../../../hooks/useQuinielas"
import useLoadingStore from "../../../../store/loadingStore"
import { formatDate2 } from "../../../../services/formatDate"
const PastQuinielas = () => {
    const { loading } = useLoadingStore()
    const { quinielas } = useQuinielas()
    return (<> {loading ? <div className="flex-center p-5"> <Spinner /> </div> :
        <table className="table text-center">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Tipo</th>
                    <th>Ganadores</th>
                    <th>Precio</th>
                    <th>Acumulado</th>
                    <th>Ganancias</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {quinielas.length > 0 && quinielas.map((quiniela, index) => (
                    <tr key={index} className={quiniela.tipoQuiniela === 1 ? "tr-gran-quiniela" : "tr-mini-quiniela"}>
                        <td>{quiniela._id.slice(-6)}</td>
                        <td>{formatDate2(quiniela.fechaQuiniela)}</td>
                        <td>{quiniela.tipoQuiniela === 1 ? <> Gran </> : <> Mini </>} Quiniela</td>
                        <td>{quiniela.winners.length} <i className="btn bi bi-eye-fill text-primary p-0" /> </td>
                        <td>{quiniela.precioQuiniela}</td>
                        <td>{quiniela.acumulado}</td>
                        <td>{quiniela.gananciasCasa}</td>
                        <td>
                            {!quiniela.status ?
                                <div className="bg-warning px-3">Finalizada</div>
                                : <div className="bg-success px-3 text-white">Activa</div>
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    } </>)


}

export default PastQuinielas