/* eslint-disable react-hooks/exhaustive-deps */
/* import { useEffect } from 'react' */
import urlApi from '../services/urlApi'
import request from '../services/request'
import useUserStore from '../store/userStore'
import useReportesStore from '../store/reportesStore'
import { useEffect } from 'react'
const useReportes = () => {

    const { reportes, setReportes, listType, setListType, reportesFiltered, setReportesFiltered } = useReportesStore()
    const { user } = useUserStore()

    const getReportes = async () => {
        const response = await request.get(`${urlApi}/reportes/agencia/${user._id}`)
        setReportes(response.data.body)
        setReportesFiltered(response.data.body)
    }

    useEffect(() => { getReportes() }, [])

    return {
        reportes,
        listType,
        setListType,
        setReportes,
        reportesFiltered,
        setReportesFiltered
    }
}

export default useReportes