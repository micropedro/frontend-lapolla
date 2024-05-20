/* eslint-disable react/prop-types */
import modalDeleteReportStore from '../../store/modalDeleteReportStore'
import useLoadingStore from '../../store/loadingStore'
import { Spinner } from 'react-bootstrap'
const DeleteReportModal = () => {
    const { loading } = useLoadingStore()
    const { visibleDeleteReport,
        textDeleteReport,
        buttonTextDeleteReport,
        setVisibleDeleteReport,
        clickEventDeleteReport } = modalDeleteReportStore()
    if (visibleDeleteReport) {
        return (
            <div className="bg-modal">
                <div className="body-modal">
                    {loading ? <> <Spinner /> </> :
                        <><div className='mb-2'> {textDeleteReport} </div>
                            <div>
                                <button className='btn btn-warning mx-2' onClick={() => clickEventDeleteReport()}> {buttonTextDeleteReport} </button>
                                <button onClick={() => setVisibleDeleteReport(false)} className='btn btn-danger mx-2'> Cancelar </button>
                            </div>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default DeleteReportModal