/* eslint-disable react-hooks/exhaustive-deps */
/* import { useEffect } from 'react' */
import urlApi from '../services/urlApi'
import request from '../services/request'
import useUserStore from '../store/userStore'
import useReportesStore from '../store/reportesStore'
import { useEffect, useState } from 'react'
/* import useConfig from './useConfig' */
import useErrorManager from './useErrorManager'
import useLoadingStore from '../store/loadingStore'
import useNotify from './useNotify'
import useModalStore from '../store/modalStore'
import useDateStore from '../store/dateStore'
import formatDate from "../services/formatDate"
const useReportes = () => {

    const { dateStore } = useDateStore()
    const { setVisible } = useModalStore()
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()
    const errorManager = useErrorManager()
    /*const { config } = useConfig()*/
    const { reportes, setReportes, listType, setListType, reportesFiltered,
        setReportesFiltered, polla, setPolla } = useReportesStore()
    const { user } = useUserStore()
    const [dataTable, setDataTable] = useState([])

    const getReportes = async () => {
        const response = await request.get(`${urlApi}/reportes/agencia/${user._id}`)
        const reportes = response.data.body
        /*  setReportes(reportes) */
        setReportesFiltered(reportes)
        /* getPolla(reportes) */
        return reportes
    }

    const getPolla = async () => {
        /* 
                const response = await request.get(urlApi + '/') //falta indicar bien a donde
                const todayTickets = response.data.body
                if (todayTickets) {
                    const polla = (config.precioGranQuiniela * todayTickets.length) * config.premioCasa / 100
                    setPolla(polla)
                } */
        setPolla(1)
    }

    const getDataReports = async (id) => {
        try {
            if (id) {

                const data = await request.get(`${urlApi}/reports/${id}`)
                const reportes = data.data.body
                console.log(reportes)
                setDataTable(reportes)
                getPolla()
                return reportes
            }
            return false
        } catch (error) {
            console.log(error)
        }
    }

    const generateReport = async () => {

        setLoading(true)
        try {
            await request.post(`${urlApi}/report/staf/`, { date: dateStore.from })
            if (user._id) await getDataReports(user?._id)
            notify.success('Reporte generado')
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
            setVisible(false)
        }
    }

    const filter = async (discound) => {
        try {
            setLoading(true)
            const date = new Date()
            const queryDate = formatDate(date, discound)
            const reportes = await getReportes()
            console.log(reportes)
            const list = reportes.filter((_reporte) => formatDate(_reporte.date) === queryDate)
            setReportesFiltered(list)
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user._id) getDataReports(user._id)
    }, [])

    useEffect(() => { getReportes() }, [])

    return {
        reportes,
        listType,
        setListType,
        setReportes,
        reportesFiltered,
        setReportesFiltered,
        polla,
        getDataReports, dataTable, setDataTable, generateReport, filter
    }
}

export default useReportes