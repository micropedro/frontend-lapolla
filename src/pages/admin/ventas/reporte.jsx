
import useLoadingStore from "../../../store/loadingStore"
import { Spinner } from "react-bootstrap"
import { formatDate2 } from '../../../services/formatDate'
import useReportUser from "../../../hooks/useReportUser"
import ModalPago from "./modales/modalPago"
import { totalAPagar } from "../../../services/utils"
import useReportUserStore from '../../../store/reportUserStore'

const tipo = { 1: "Gran quiniela", 2: "Mini Quiniela" }

const ReportUser = () => {
    const { dataTable } = useReportUserStore()
    const { loading } = useLoadingStore()
    const { handlePay } = useReportUser()

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
                                        {!i?.transfer ? <>
                                            <button onClick={() => handlePay(i)} className="btn btn-primary">Pagar</button>
                                        </>
                                            : <>
                                                {i?.transfer?.status === 0 && <div className="alert alert-warning"> Pendiente </div>}
                                                {i?.transfer?.status === 1 && <div className="alert alert-success"> Aprobado </div>}
                                                {i?.transfer?.status === 2 && <div className="alert alert-danger"> 
                                                    Rechazado 
                                                    <button onClick={() => handlePay(i)} className="btn btn-primary">Pagar</button>
                                                </div>}
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