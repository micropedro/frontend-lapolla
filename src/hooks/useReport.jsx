/* eslint-disable react-hooks/exhaustive-deps */
import useReportStore from "../store/reportStore"
import useErrorManage from "../hooks/useErrorManager"
import useModalStore from "../store/modalStore"
import useLoadingStore from "../store/loadingStore"
import { getAllReports, createReport, deleteReport } from "../controllers/reportController"
import { useEffect } from "react"
import useModalDeleteReportStore from "../store/modalDeleteReportStore"
const useReport = () => {

    const { setVisibleDeleteReport, setTextDeleteReport, setClickEventDeleteReport, setButtonTextDeleteReport } = useModalDeleteReportStore()

    const { setLoading } = useLoadingStore()

    const { setVisible } = useModalStore()

    const erroManager = useErrorManage()
    const { setReports, reportDate, setReportDate } = useReportStore()

    const getReports = async () => {
        try {
            setLoading(true)
            const { data } = await getAllReports()
            setReports(data.body)
            setLoading(false)
            return data.body
        } catch (error) {
            setReports([])
            setLoading(false)
            erroManager(error)
        }
    }

    const saveReport = async () => {
        try {
            setLoading(true)
            setVisible(false)
            console.log(reportDate)
            await createReport(reportDate)
            await getReports()
        } catch (error) {
            erroManager(error)
        } finally {
            setLoading(false)
            setVisible(false)
            setReportDate("")
        }
    }

    const handleModal = () => {
        setVisible(true)
    }

    const dropReport = async (_id) => {
        try {
            setLoading(true)
            const resDelete = await deleteReport(_id)
            console.log(resDelete.data.body)
            await getReports()
        } catch (error) {
            erroManager(error)
        } finally {
            setVisibleDeleteReport(false)
            setLoading(false)
        }
    }

    const handleDelete = (_id) => {
        setVisibleDeleteReport(true)
        setTextDeleteReport("¿Seguro que desea eliminar este reporte?")
        setClickEventDeleteReport(() => dropReport(_id))
        setButtonTextDeleteReport("Eliminar este reporte")
    }

    useEffect(() => { getReports() }, [])

    return {
        handleModal,
        saveReport,
        handleDelete
    }
}

export default useReport