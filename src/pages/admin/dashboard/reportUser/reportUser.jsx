import { Link } from "react-router-dom"
import useReportUser from "../../../../hooks/useReportUser"
import useLoadingStore from "../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"
import formatDate from '../../../../services/formatDate'
const ReportUser = () => {
    const { loading } = useLoadingStore()
    const { reportUser, dataTable, profit } = useReportUser()

    const identifier = {
        1: "master",
        2: "admin",
        3: "Grupero",
        4: "Agencia",
        5: "Cliente"
    }

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h3>Reporte de ventas ({identifier[reportUser?.level]})</h3>
                        <Link to='/dashboard/users'>
                            <button className="btn btn-primary" style={{ width: "170px" }}>
                                <i className="bi bi-arrow-left"> Regresar</i>
                            </button>
                        </Link>
                    </div>
                    <div className="card my-4 p-4">
                        <div className="flex-between">
                            <div><b>{reportUser.name}</b></div>
                            <div>{reportUser.phone}</div>
                            <div>{reportUser.email}</div>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Vendidos</th>
                                <th>Total BS</th>
                                <th>Comisión Agencias</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ?
                                <tr>
                                    <td colSpan={4} className="text-center p-4"> <Spinner /> </td>
                                </tr> : dataTable && dataTable.length > 0 && dataTable.map((table) => {
                                    return (<tr key={table._id}>
                                        {console.log(table)}
                                        <td>{formatDate(table.creationDate)}</td>
                                        <td>{table.ticketsSold}</td>
                                        <td>{table.totalSold}</td>
                                        <td>{profit(table)} </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ReportUser