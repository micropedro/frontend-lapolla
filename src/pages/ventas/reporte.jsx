import useReportes from "../../hooks/useReportes"
import { convertCeroNumber } from "../../services/utils"
import dateNow from "../../services/dateNow"
import useNotify from '../../hooks/useNotify'
import formatDate from "../../services/formatDate"

const Reporte = () => {
    const { notify } = useNotify()
    const { reportes, listType, setListType, reportesFiltered, setReportesFiltered } = useReportes()

    const filter = (discound) => {
        const date = new Date()
        const queryDate = formatDate(date, discound)
        const list = reportes.filter((_reporte) => formatDate(_reporte.date) === queryDate)
        setReportesFiltered(list)
        if (list.length === 0) notify.error('No se encontraron registros en esta fecha')
    }

    return (<>
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-12">
                    <h3>Reporte de ventas (Agencia)</h3>
                    <div className="card p-4 text-lg">
                        <div className="flex-between">
                            <div>Tickets vendidos: <b> {reportes.length} </b></div>
                            <div>{dateNow.fecha} {dateNow.horas}:{dateNow.minutos} {dateNow.periodo}</div>
                        </div>
                        <div>
                            Total de ventas <b> {reportes.length * 25} BS </b>
                        </div>
                        <div>
                            Total a pagar <b> {reportes.length * 25 * 0.80} BS </b>
                        </div>
                    </div>
                </div>
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
                </>
                }

            </div>
        </div>
    </>
    )
}




export default Reporte

/* const listaFechas = [
    { id: "1", name: "item 1", date: "2024-03-11 10:30:15" },
    { id: "2", name: "item 2", date: "2024-03-11 12:45:30" },
    { id: "3", name: "item 3", date: "2024-03-11 14:20:00" }
  ];
  
  // Función para convertir una fecha y hora en milisegundos
  function convertirAMilisegundos(dateTimeStr) {
    const [fecha, hora] = dateTimeStr.split(" ");
    const [anio, mes, dia] = fecha.split("-");
    const [hh, mm, ss] = hora.split(":");
    return new Date(anio, mes - 1, dia, hh, mm, ss).getTime();
  }
  
  // Define el rango de horas (por ejemplo, de 11:00:00 a 14:00:00)
  const horaInicio = convertirAMilisegundos("2024-03-11 11:00:00");
  const horaFin = convertirAMilisegundos("2024-03-11 14:00:00");
  
  // Filtra las fechas dentro del rango de horas
  const fechasFiltradas = listaFechas.filter((item) => {
    const fechaEnMilisegundos = convertirAMilisegundos(item.date);
    return fechaEnMilisegundos >= horaInicio && fechaEnMilisegundos <= horaFin;
  });
  
  console.log(fechasFiltradas); */