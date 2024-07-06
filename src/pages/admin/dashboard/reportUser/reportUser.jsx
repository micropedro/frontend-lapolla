import useReportUser from "../../../../hooks/useReportUser"
import useLoadingStore from "../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"
import { formatDate2 } from '../../../../services/formatDate'
const tipo = { 1: "Gran quiniela", 2: "Mini Quiniela" }

const ReportUser = () => {
    const { loading } = useLoadingStore()
    const { dataTable } = useReportUser()

    return (
        <>
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
                        <th>Total</th>
                    </tr>
                </thead>
                {loading ? <> <Spinner /> </> : <></>}
                <tbody>
                    {dataTable?.map((i) => {
                        return (
                            <tr key={i._id} className={i.status ? "bg-act":"bg-fin"}>
                                <td> {formatDate2(i.fechaQuiniela)}</td>
                                <td> {i.tickets.length} </td>
                                <td>{tipo[i.tipoQuiniela]}</td>
                                <td>Bs.{i.precioQuiniela}</td>
                                <td>{i.acumulado}</td>
                                <td>{i.status ? <>Activa</> : <>Finalizada</>}</td>
                                <td>{i.tickets[0].user.percent} %</td>
                                <td>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ReportUser