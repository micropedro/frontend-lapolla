/* eslint-disable react-hooks/exhaustive-deps */

import useReportStore from "../../../store/reportStore"
import useReport from "../../../hooks/useReport"
import { formatDate2 } from "../../../services/formatDate"
import useLoadingStore from "../../../store/loadingStore"
import Spinner from "../../../components/spinner"
import ReportModal from "../../../components/modals/reportModal"
import DeleteReportModal from "../../../components/modals/deleteReportModal"

function Reporte() {

    const { loaidng } = useLoadingStore()
    const { handleModal, handleDelete } = useReport()
    const { reports } = useReportStore()
    return (

        <>
            <DeleteReportModal />
            <ReportModal />
            <div className="flex-between">
                <h2>Reporte general</h2>
                <button onClick={() => handleModal()} className="btn btn-primary" > Generar reporte </button>
            </div>
            <hr />
            {loaidng ? <div className="text-center p-5"><Spinner color="blue" /></div> :
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>vendidos</th>
                                <th>Total BS</th>
                                <th>Comision Admin</th>
                                <th>Comision Gruperos</th>
                                <th>Comision Agencias</th>
                                <th>Total Premios</th>
                                <th>Saldo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports && reports.map((report, index) => {
                                return (<tr key={index}>
                                    <td>{formatDate2(report.creationDate)}</td>
                                    <td> { report.ticketsSold } </td>
                                    <td>{report.totalSold}</td>
                                    <td>{report.adminAmount}</td>
                                    <td>{report.gruperoAmount}</td>
                                    <td>{report.agenciaAmount}</td>
                                    <td>{report.premio}</td>
                                    <td>{report.homeBalance}</td>
                                    <td> <button onClick={() => handleDelete(report._id)} className="btn btn-danger"> Eliminar </button> </td>
                                </tr>)
                            })}
                        </tbody>

                    </table>
                </div>}

        </>
    )
}

export default Reporte