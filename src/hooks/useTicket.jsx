import request from "../services/request"
import urlApi from "../services/urlApi"
import useNotify from "..//hooks/useNotify"
import useTicketStore from "../store/ticketStore"
import useUserStore from "../store/userStore"
import { useNavigate } from "react-router-dom"
import loadingStore from "../store/loadingStore"
import useErrorManager from "./useErrorManager"
import useUser from './useUser';
import { useEffect, useState } from "react"
import getTicketCode from "../services/getTicketCode"
import { getCurrentTicketData } from "../controllers/ticketController"
import formatDate from "../services/formatDate"
import useSession from "./useSession"

const useTicket = () => {
    const { closeSession } = useSession()
    const errorManager = useErrorManager()
    const { getUser } = useUser()
    const { setLoading } = loadingStore()
    const navigate = useNavigate()
    const { user, setUser } = useUserStore()
    const { animals, type, setVisible, setAnimals, tickets, setTickets, setTicketData, } = useTicketStore()
    const { notify } = useNotify()
    const [playingTickets, setPlayingTickets] = useState([])

    const handlePrint = async () => {
        try {
            setLoading(true)

            const body = { animals, type }

            if (body?.animals?.length < 4) throw "Elija sus animalitos"
            if (Object.keys(user) === 0) throw "Usuario invalido"
            if (body.animals.length !== 6 && body.animals.length !== 4) throw "Elija animales correctamente: " + body.animals.length
            if (!body.type) throw "Elija un tipo de quiniela"

            const res = await request.post(`${urlApi}/tickets`, body)
            const formatedData = res.data.body

            if (res) {
                const _user = await getUser(user._id)
                const newUser = { ...user, balance: _user.balance }
                setUser(newUser)
                setTicketData(formatedData)
                navigate("/print")
            } else {
                throw 'No se ha podido guardar el ticket'
            }
            setLoading(false)

        } catch (error) {
            setVisible(false)
            closeSession()
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    const saveTicketClient = async () => {
        setLoading(true)
        try {

            const code = await getTicketCode()

            const body = { animals, user, type, code }

            const res = await request.post(`${urlApi}/tickets`, body)
            if (res) {
                const _user = await getUser(user._id)
                const newUser = { ...user, balance: _user.balance }
                setUser(newUser)
                setAnimals([])
                notify.success("Compra de ticket exitosa")
            } else throw 'No se ha podido guardar el ticket'

        } catch (error) {
            notify.error(error?.response?.data?.message || error)
        } finally {
            setVisible(false)
            setLoading(false)
        }
    }

    const getTickets = async () => {
        try {
            setLoading(true)
            if (user?._id) {
                const res = await request.get(`${urlApi}/gettickets/${user?._id}`)
                if (res) {
                    setTickets(res.data.body)
                    return res.data.body
                } else throw 'Ah ocurrido un error'
            }
        } catch (error) {
            errorManager(error)
            return []
        } finally {
            setLoading(false)
        }
    }

    const getAllTickets = async ({ from, to }) => {
        try {
            setLoading(true)
            const res = await request.get(`${urlApi}/tickets/${from}/${to}`)
            if (res) {
                const filtered = res.data.body.filter(ticket => ticket.user._id !== user._id)
                setTickets(filtered)
                return filtered
            } else throw 'Ah ocurrido un error'
        } catch (error) {
            errorManager(error)
            return []
        } finally {
            setLoading(false)
        }
    }

    const getTicketData = async (quinielaType) => {
        const currentTicket = await getCurrentTicketData(quinielaType)
        const quiniela = currentTicket.data.body
        const count = quiniela.count
        const date = new Date(quiniela.fechaQuiniela)
        const _fechaQuiniela = date.setDate(date.getDate() + 2)
        const fechaQuiniela = formatDate(_fechaQuiniela)
        const ticketCount = 1
        const data = {
            count,
            fechaQuiniela,
            ticketCount
        }
        if (currentTicket) setTicketData(data)
    }

    useEffect(() => {
        getTickets();
        //setTodayTickets(345)
    }, [])

    return {
        handlePrint,
        saveTicketClient,
        getTickets,
        getAllTickets,
        tickets,
        playingTickets,
        setPlayingTickets,
        getTicketData
    }
}

export default useTicket