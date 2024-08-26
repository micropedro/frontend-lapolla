import { useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useErrorManager from "./useErrorManager"
import useAnimals from "../hooks/useAnimals"
import useLoadingStore from "../store/loadingStore"
import useTicketStore from "../store/ticketStore"

const granQuniela = "1"

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
            const res = await request.get(urlApi + "/tickets/find/one/" + code.toUpperCase())

            const ticket = res.data.body
            const ticketType = ticket.quinielaType
            const ticketAnimals = ticket.animals
            const animals = await getAnimals()
            setAnimals(animals)
            const ids = animals.map(animal => animal.animalId)
            const ticketsIds = ticketAnimals.map(animal => animal.id)

            if (ticket) {

                const numerosRepetidos = ticketsIds.filter(num => ids.includes(num))

                console.log(numerosRepetidos)

                if (ticketType === granQuniela) {
                    if (numerosRepetidos.length === 6 || numerosRepetidos.length === 5) {
                        ticket.isWinner = true
                    }
                    setTicket(ticket)
                } else {
                    if (numerosRepetidos.length === 4) {
                        ticket.isWinner = true
                    } else {
                        ticket.isWinner = false
                    }
                    setTicket(ticket)
                }

                /* 

                if (ticketType === miniQuiniela && numerosRepetidos.length === 4) {
                    ticket.isWinner = true 
                }

                if (ticketType === granQuniela && numerosRepetidos.length !== 6) {
                    if (numerosRepetidos.length === 5) {
                        ticket.isWinner = true
                    } else {
                        ticket.isWinner = false
                    }
                }
                if (ticketType === miniQuiniela && numerosRepetidos.length !== 4) {
                    ticket.isWinner = false
                } */


            }

            setLoading(false)

        } catch (error) {
            errorManager(error)
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