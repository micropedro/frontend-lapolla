/* eslint-disable react-hooks/exhaustive-deps */
/* import { useEffect } from 'react' */
import urlApi from '../services/urlApi'
import request from '../services/request'
import useUserStore from '../store/userStore'
import useReportesStore from '../store/reportesStore'
import { useEffect } from 'react'
import useConfig from './useConfig'
const useReportes = () => {
    const { granQuinielaPrice, pollaWinnersPercent } = useConfig()
    const { reportes, setReportes, listType, setListType, reportesFiltered, setReportesFiltered, polla, setPolla } = useReportesStore()
    const { user } = useUserStore()

    const getReportes = async () => {
        const response = await request.get(`${urlApi}/reportes/agencia/${user._id}`)
        const reportes = response.data.body
        setReportes(reportes)
        setReportesFiltered(reportes)
        getPolla(reportes)
    }
    const getPolla = (reportes) => {
        const todayTickets = reportes.filter((ticket) => {
            const date = new Date()
            const ticketDate = new Date(ticket.date)
            const today = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
            const ticketToday = ticketDate.getFullYear() + '-' + ticketDate.getMonth() + '-' + ticketDate.getDate()
            return today === ticketToday
        })
        const polla = (granQuinielaPrice * todayTickets.length) * pollaWinnersPercent / 100
        console.log(granQuinielaPrice)
        setPolla(polla)
    }

    useEffect(() => { getReportes() }, [])

    return {
        reportes,
        listType,
        setListType,
        setReportes,
        reportesFiltered,
        setReportesFiltered,
        polla
    }
}

export default useReportes