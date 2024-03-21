/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useErrorManager from "../hooks/useErrorManager"
import useLoadingStore from "../store/loadingStore"
import { restarDias } from "../services/utils"

const useQuinielas = () => {

    const { setLoading } = useLoadingStore()
    const errorManager = useErrorManager()
    const [tickets, setTickets] = useState([])
    const [jugadas, setJugadas] = useState(false)
    const [cantGanadores, setCantGanadores] = useState(0)
    const [type, setType] = useState("1")

    const getTickets = async () => {
        setLoading(true)
        try {
            const date = new Date()
            const fechaHoy = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, '0')}`
            const fechaAyer = restarDias(fechaHoy, 1)

            const res = await request.get(`${urlApi}/tickets/${fechaAyer}/${fechaHoy}`)

            const filteredTickets = res.data.body.filter((ticket) => {
                const date = new Date()
                const ticketDate = new Date(ticket.date)
                const diaDeHoy = date.getDate()
                const horaDeHoy = date.getHours()
                const diaDeAyer = new Date(date)
                diaDeAyer.setDate(diaDeAyer.getDate() - 1)

                const horaDelTicket = ticketDate.getHours()
                const diaDelTicket = ticketDate.getDate()

                if (horaDeHoy > 8) {
                    return diaDeHoy === diaDelTicket && ticket.quinielaType === type
                } else {
                    return diaDeHoy === diaDelTicket && ticket.quinielaType === type || diaDeAyer === diaDelTicket && horaDelTicket > 8 && ticket.quinielaType === type
                }
            })

            setTickets(filteredTickets)
        } catch (error) { errorManager(error) }
        setLoading(false)
    }

    useEffect(() => { getTickets() }, [type])

    return {
        tickets,
        jugadas,
        setJugadas,
        cantGanadores,
        setCantGanadores,
        type, setType,
    }
}

export default useQuinielas