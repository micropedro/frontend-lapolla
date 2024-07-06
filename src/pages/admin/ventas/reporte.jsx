
import useLoadingStore from "../../../store/loadingStore"
import { Spinner } from "react-bootstrap"
import { formatDate2 } from '../../../services/formatDate'
import useReportUser from "../../../hooks/useReportUser"
import ModalPago from "./modales/modalPago"
import { totalAPagar } from "../../../services/utils"
const tipo = { 1: "Gran quiniela", 2: "Mini Quiniela" }

const ReportUser = () => {

    const { loading } = useLoadingStore()
    const { dataTable, handlePay } = useReportUser()

    return (
        <>
            <ModalPago />
            {loading ? <div className="text-center p-4"> <Spinner /> </div> : <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Vendidos</th>
                            <th>Tipo</th>
                            <th>Precio</th>
                            <th>acumulado</th>
                            <th>estatus</th>
                            <th>Porcentaje agencia</th>
                            <th>Total a pagar</th>
                            <th>¿Pagado?</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {dataTable.length > 0 ? dataTable?.map((i) => {
                            return (
                                <tr key={i._id} className={i.status ? "bg-act" : "bg-fin"}>
                                    <td> {formatDate2(i.fechaQuiniela)}</td>
                                    <td> {i.tickets.length} </td>
                                    <td>{tipo[i.tipoQuiniela]} {i._id.slice(-6)}</td>
                                    <td>Bs.{i.precioQuiniela}</td>
                                    <td>{i.acumulado}</td>
                                    <td>{i.status ? <>Activa</> : <>Finalizada</>}</td>
                                    <td>{i.tickets[0].user.percent} %</td>
                                    <td>
                                        <span className="totalMoney">
                                            {i?.transfer?.status === 1 ? 0 : totalAPagar(i.tickets, i.precioQuiniela).toFixed(2)} Bs
                                        </span>
                                    </td>
                                    <td>
                                        {console.log(i.userPayd)}

                                        {!i?.transfer ? <>
                                            <button onClick={() => handlePay(i)} className="btn btn-primary">Pagar</button>
                                        </>
                                            : <>
                                                {i?.transfer?.status === 0 && <div className="alert alert-warning"> Pendiente </div>}
                                                {i?.transfer?.status === 1 && <div className="alert alert-success"> Aprobado </div>}
                                                {i?.transfer?.status === 2 && <div className="alert alert-danger"> Rechazado </div>}
                                            </>}
                                    </td>
                                </tr>
                            )
                        }) : <tr> <td colSpan={8} className="w-100 p-3 text-center bg-light">Sin Datos </td>  </tr>}
                    </tbody>
                </table>
            </>}
        </>
    )
}

export default ReportUser

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