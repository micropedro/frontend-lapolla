import { convertCeroNumber } from "../../../services/utils"
import useReportes from "../../../hooks/useReportes"
import formatDate from "../../../services/formatDate"
import useNotify from '../../../hooks/useNotify'

const TicketSold = () => {

    const { listType, setListType, reportesFiltered } = useReportes()
    const { reportes, setReportesFiltered } = useReportes()
    const { notify } = useNotify()

    const filter = (discound) => {
        const date = new Date()
        const queryDate = formatDate(date, discound)
        const list = reportes.filter((_reporte) => formatDate(_reporte.date) === queryDate)
        setReportesFiltered(list)
        if (list.length === 0) notify.error('No se encontraron registros en esta fecha')
    }
 
    return (<div className="container">
        <div className="row">
            <div className="col-12">
                <div className="flex-between">
                    <div>
                        <button onClick={() => filter(0)} className="btn">Hoy</button>
                        <button onClick={() => filter(1)} className="btn">Ayer</button>
                        <button onClick={() => filter(2)} className="btn"> -2 dias </button>
                        <button onClick={() => filter(3)} className="btn"> -3 dias </button>
                        <button onClick={() => filter(4)} className="btn"> -4 dias </button>
                        <button onClick={() => filter(5)} className="btn"> -5 dias </button>
                    </div>
                    <div>
                        <button onClick={() => setListType(true)} className="btn text-dark"> <i className="bi bi-grid-fill" /> </button>
                        <button onClick={() => setListType(false)} className="btn text-dark"> <i className="bi bi-list-ul" /> </button>
                    </div>
                </div>

                {listType ? reportesFiltered.length > 0 && reportesFiltered.map((reporte, index) => {
                    const date = new Date(reporte.date).getDate()
                    return <div key={index} className="col-3 mb-3 text-center">
                        <div className="card h-100 p-2">
                            <b>Nro. {index + 1}</b>
                            <div>
                                <b className="text-success">
                                    {reporte.quinielaType === "1" ? "Gan Quiniela" : "Mini Quiniela"}
                                </b>
                            </div>
                            <div>
                                {

                                    date

                                }</div>
                            <div>
                                {reporte.animals.map((animal, index2) => {
                                    return (<span className="mx-2" key={index2}>{animal.id === 37 ? "00" : convertCeroNumber(animal.id)}-{animal.name}, </span>)
                                })}
                            </div>
                        </div>
                    </div>
                }) : <>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th> Nro </th>
                                <th> Tipo </th>
                                <th> Fecha </th>
                                <th> Hora </th>
                                <th className="text-end">Jugada</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportesFiltered.length > 0 && reportesFiltered.map((reporte, index) => {
                                const date = new Date(reporte.date)
                                const dia = String(date.getDate()).padStart(2, '0')
                                const anio = date.getFullYear()
                                const mes = String(date.getMonth() + 1).padStart(2, '0')
                                return (<tr key={index}>
                                    <td> {index} </td>
                                    <td>{reporte.quinielaType === "1" ? "Gan Quiniela" : "Mini Quiniela"}</td>
                                    <td>{dia}-{mes}-{anio}</td>
                                    <td>{reporte.hora}</td>
                                    <td className="text-end">{reporte.animals.map((animal) => `${animal.id === 37 ? "00" : convertCeroNumber(animal.id)}-${animal.name}, `)}</td>
                                </tr>)
                            })}
                        </tbody>

                    </table>
                </>}
            </div>

        </div>

    </div>)
}
export default TicketSold
