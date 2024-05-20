/* eslint-disable react-hooks/exhaustive-deps */
import Guard from "../../../components/Guard"
import useLoadingStore from "../../../store/loadingStore"
import Spinner from "../../../components/spinner"
import useQuinielas from "../../../hooks/useQuinielas"

const Quinielas = () => {

    const { quinielas, createNewQuiniela } = useQuinielas()
    const { loading } = useLoadingStore()

    return (<Guard>
        <div>
            <div className='flex-between px-4 pt-3'>
                <h2> Quinielas </h2>
                <button onClick={() => createNewQuiniela()} className="btn btn-primary"> + Iniciar quinielas </button>
            </div>
            <hr />
            {loading ? <>
                <Spinner color={"black"} />
            </> : (<table className="table text-center">
                <thead>
                    <tr>
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
            </table>)
            }
        </div>
    </Guard >
    )
}
export default Quinielas