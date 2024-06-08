import useReportStore from "../store/reportStore"
import useErrorManage from "../hooks/useErrorManager"
import useModalStore from "../store/modalStore"
import useLoadingStore from "../store/loadingStore"
import { getAllReports, createReport, deleteReport, getReportsOfDates } from "../controllers/reportController"
import { useEffect, useRef } from "react"
import useModalDeleteReportStore from "../store/modalDeleteReportStore"
import { validate } from "../services/validate"
import useNotify from "./useNotify"
import useDateStore from "../store/dateStore"
const useReport = () => {
    const { dateStore } = useDateStore()
    const { notify } = useNotify()
    const { required } = validate
    const date1 = useRef()
    const date2 = useRef()
    const { setVisibleDeleteReport, setTextDeleteReport, setClickEventDeleteReport, setButtonTextDeleteReport } = useModalDeleteReportStore()
    const { setLoading } = useLoadingStore()
    const { setVisible } = useModalStore()
    const erroManager = useErrorManage()
    const { setReports, reportDate, setReportDate, total, setTotal } = useReportStore()

    const getTotalArray = (reportsData)=> reportsData.map(i => i.homeBalance).reduce((a, b) => a + b, 0)

    const getReports = async () => {
        try {
            setLoading(true)
            const { data } = await getAllReports()
            setReportDate(dateStore.from)
            const reportsData = data.body
            setReports(reportsData)
            setLoading(false)
            const _total = getTotalArray(reportsData)
            setTotal(_total)
            return reportsData
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

    const findDates = async () => {
        try {
            setLoading(true)
            const from = date1.current.value
            const to = new Date(date2.current.value)
            to.setHours(to.getHours() + 4)
            required(from, "Ingrese una fecha de inicio")
            required(to, "Ingrese una fecha de finalizacion")

            const response = await getReportsOfDates({ from, to })
            const arrayReports = response.data.body
            const _total = getTotalArray(arrayReports)
            setTotal(_total)
            if (!arrayReports) return notify.success("No se encontraron reportes")
            setReports(arrayReports)

        } catch (error) {
            erroManager(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        handleModal,
        saveReport,
        handleDelete,
        date1, date2, findDates,
        total
    }
}

export default useReport