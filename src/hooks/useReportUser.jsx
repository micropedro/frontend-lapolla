import { useEffect, useState } from "react"
import useReportUserStore from "../store/reportUserStore"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useLoadingStore from "../store/loadingStore"
import useErrorManager from '../hooks/useErrorManager'
const useReportUser = () => {
    const errorManager = useErrorManager()
    const { setLoading } = useLoadingStore()
    const { reportUser, setReportUser } = useReportUserStore()
    const [dataTable, setDataTable] = useState()

    const getDataTable = async (userId) => {
        try {
            setLoading(true)
            const res = await request.get(urlApi + '/reports/' + userId)
            const reportes = res.data.body
            setDataTable(reportes)

        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }

        //setDataTable(reportes)
    }

    const profit = (table) => {
        console.log(table)
        const userLevel = table.user.level
        const adminAmount = table.adminAmount
        const gruperoAmount = table.gruperoAmount
        const agenciaAmount = table.agenciaAmount

        const options = {
            2: adminAmount,
            3: gruperoAmount,
            4: agenciaAmount
        }

        return options[userLevel]
    }

    useEffect(() => {
        if (reportUser?._id) getDataTable(reportUser._id)
    }, [])

    return {
        reportUser,
        setReportUser,
        dataTable,
        profit
    }
}

export default useReportUser