import useModalStore from "../../store/modalStore"
import useReportStore from "../../store/reportStore"
import useReport from "../../hooks/useReport"
const ReportModal = () => {
    const { saveReport } = useReport()
    const { setReportDate, reportDate } = useReportStore()
    const { visible, setVisible } = useModalStore()
    if (visible) return (
        <div className="bg-modal">
            <div className="body-modal">
                <div>
                    <div className="">
                        <div className="pb-2">
                            Elegir fecha de reporte
                        </div>
                        <input onChange={(e) => setReportDate(e.target.value)} type="date" name="" id="" className="form-control mb-4" />
                        <hr />
                    </div>
                    <button className='btn btn-warning mx-2' onClick={() => saveReport(reportDate)} > Generar </button>
                    <button onClick={() => setVisible(false)} className='btn btn-danger mx-2'> Cancelar </button>
                </div>

            </div>
        </div>
    )
}

export default ReportModal