/* eslint-disable react-hooks/exhaustive-deps */
import Guard from "../../../components/Guard"
import useLoadingStore from "../../../store/loadingStore"
import Spinner from "../../../components/spinner"
import useAnimals from '../../../hooks/useAnimals'
import useQuinielas from "../../../hooks/useQuinielas"
import { formatIf37, am_pm_format } from "../../../services/utils"

const Quinielas = () => {

    const { quinielas } = useQuinielas()
    const { loading } = useLoadingStore()
    const { animals } = useAnimals()

    return (<Guard>
        <div>
            <div className='flex-between px-4 pt-3'>
                <h2> Qunielas </h2>
            </div>
            <hr />
            animalitos del dia de hoy
            <div className="container-fluid">
                <div className="row">
                    {animals.length > 0 && animals.map((animal, index) => (
                        <div key={index} className="col-4 col-sm-3 col-md-2 mb-2">
                            <div className="card p-3 text-center mx-1">
                                <div> {formatIf37(animal.animalId)} </div>
                                <div> {animal.name} </div>
                                <div> {am_pm_format(animal.hora)}  </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            {loading ? <>
                <Spinner color={"black"} />
            </> : (<table className="table text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Ganadores</th>
                        <th>Precio</th>
                        <th>Acumulado</th>
                        <th>Ganancias</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {quinielas.length > 0 && quinielas.map((quiniela, index) => (
                        <tr key={index} className="">
                            <td>{quiniela._id}</td>
                            <td>{quiniela.winners.length} <i className="btn bi bi-eye-fill text-primary" /> </td>
                            <td>{quiniela.precioQuiniela}</td>
                            <td>{quiniela.acumulado}</td>
                            <td>{quiniela.gananciasCasa}</td>
                            <td>{quiniela.status ? "Finalizada" : "Activa"}</td>
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