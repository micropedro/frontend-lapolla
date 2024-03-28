import { useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useErrorManager from "./useErrorManager"
import useAnimals from "../hooks/useAnimals"
import useLoadingStore from "../store/loadingStore"
import useTicketStore from "../store/ticketStore"
const useGanadores = () => {
    const { setLoading } = useLoadingStore()
    const { getAnimals } = useAnimals()
    const errorManager = useErrorManager()
    const [code, setCode] = useState("")
    const { ticket, setTicket } = useTicketStore()
    const [animals, setAnimals] = useState()

    const winnerTicket = async () => {
        try {
            setLoading(true)
            const res = await request.get(urlApi + "/tickets/find/one/" + code)
            const ticket = res.data.body
            const ticketType = ticket.quinielaType
            const ticketAnimals = ticket.animals
            const animals = await getAnimals()
            setAnimals(animals)
            const ids = animals.map(animal => animal.animalId)
            const ticketsIds = ticketAnimals.map(animal => animal.id)
            if (ticket) {
                console.log(ticket)
                const numerosRepetidos = ids.filter(num => ticketsIds.includes(num))
                console.log(numerosRepetidos)

                if (ticketType === "1" && numerosRepetidos.length === 6) {
                    ticket.isWinner = true
                    setTicket(ticket)
                }

                if (ticketType === "2" && numerosRepetidos.length === 3) {
                    ticket.isWinner = true
                    setTicket(ticket)
                }

                if (ticketType === "1" && numerosRepetidos.length !== 6) {
                    ticket.isWinner = false
                    setTicket(ticket)
                }

                if (ticketType === "2" && numerosRepetidos.length !== 3) {
                    ticket.isWinner = false
                    setTicket(ticket)
                }
            }

            setLoading(false)

        } catch (error) {
            errorManager(error);
            setLoading(false)
            setTicket(false)
        }
    }

    return {
        code, setCode,
        winnerTicket,
        ticket,
        animals
    }
}

export default useGanadores