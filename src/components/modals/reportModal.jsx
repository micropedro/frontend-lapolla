import useModalStore from "../../store/modalStoreReport"
import useReportStore from "../../store/reportStore"
import useDateStore from "../../store/dateStore";
import useLoadingStore from "../../store/loadingStore";
import { Spinner } from "react-bootstrap";
// eslint-disable-next-line react/prop-types
const ReportModal = ({ handleExec }) => {
    const { loading } = useLoadingStore()
    const { setReportDate, reportDate } = useReportStore()
    const { visible, setVisible } = useModalStore()
    const { dateStore, setDateStore } = useDateStore()

    if (visible) return (
        <div className="bg-modal">
            <div className="body-modal">
                {loading ? <>
                    <Spinner />
                    <div> Generando Reporte </div>
                </> : <div>
                    <div className="">
                        <div className="pb-2">
                            Elegir fecha de reporte
                        </div>
                        <input onChange={(e) => {
                            setReportDate(e.target.value);
                            setDateStore({
                                from: e.target.value,
                                to: e.target.value
                            })
                        }} type="date" name="" id="from" className="form-control mb-4" defaultValue={dateStore.from} />
                        <hr />
                    </div>
                    <button className='btn btn-warning mx-2' onClick={() => handleExec(reportDate)}> Generar </button>
                    <button onClick={() => setVisible(false)} className='btn btn-danger mx-2'> Cancelar </button>
                </div>}

            </div>
        </div>
    )
}

export default ReportModal