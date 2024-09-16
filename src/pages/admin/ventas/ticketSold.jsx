import { convertCeroNumber } from "../../../services/utils"
import useReportes from "../../../hooks/useReportes"
import { formatedDate, formatHour } from "./utils"

const TicketSold = () => {

    const { listType, setListType, reportesFiltered, filter } = useReportes()

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
                    return <div key={index} className="col-3 mb-3 text-center">
                        <div className="card h-100 p-2">
                            <div className="flex-between px-3">
                                <b>Nro.{reporte.count}</b>
                                <div>
                                    <b className="text-success">
                                        {reporte.quinielaType === "1" ? "Gran Quiniela" : "Mini Quiniela"}
                                    </b>
                                </div>
                            </div>
                            <div className="text-start mx-3 flex-between">
                                <div>
                                    {formatedDate(reporte.date)}
                                </div>
                                <div>
                                    {formatHour(reporte.hora)}
                                </div>
                            </div>
                            <hr className="my-1" />
                            <div className="container-fluid text-primary">
                                <div className="row">
                                    {reporte.animals.map((animal, index2) => {
                                        return (<div className="col-6 text-start" key={index2}>{animal.id === 37 ? "00" : convertCeroNumber(animal.id)}-{animal.name} </div>)
                                    })}
                                </div>
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
                            {reportesFiltered.length > 0 ? reportesFiltered.map((reporte, index) => {

                                return (<tr key={index}>
                                    <td> {reporte.count} </td>
                                    <td>{reporte.quinielaType === "1" ? "Gran Quiniela" : "Mini Quiniela"}</td>
                                    <td>{formatedDate(reporte.date)}</td>
                                    <td>{formatHour(reporte.hora)}</td>
                                    <td className="text-end">{reporte.animals.map((animal) => `${animal.id === 37 ? "00" : convertCeroNumber(animal.id)}-${animal.name}, `)}</td>
                                </tr>)
                            }) : <tr>
                                <td colSpan={8}>
                                    No se encontraron reportes
                                </td>
                            </tr>}
                        </tbody>
                    </table>
                </>}
            </div>
        </div>
    </div>)
}
export default TicketSold
