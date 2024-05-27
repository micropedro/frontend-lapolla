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
const useTicket = () => {

    const errorManager = useErrorManager()
    const { getUser } = useUser()
    const { setLoading } = loadingStore()
    const navigate = useNavigate()
    const { user, setUser } = useUserStore()
    const { animals, type, ticketCode, setVisible, setAnimals, tickets, setTickets } = useTicketStore()
    const { notify } = useNotify()

    const [playingTickets, setPlayingTickets] = useState([])

    const handlePrint = async () => {
        setLoading(true)

        const body = { animals, user, type, code: ticketCode }

        try {
            if (!body.animals) throw "No animals"
            if (!body.user) throw "No user"
            if (!body.type) throw "No type"
            if (!body.code) throw "No code"
            if (body.animals.length !== 6 && body.animals.length !== 3) throw "Elija animales correctamente: " + body.animals.length

            const res = await request.post(`${urlApi}/tickets`, body)
            if (res) {
                const _user = await getUser(user._id)
                const newUser = { ...user, balance: _user.balance }
                setUser(newUser)
                navigate("/print")
            } else {
                throw 'No se ha podido guardar el ticket'
            }
            setLoading(false)

        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    const saveTicketClient = async () => {
        setLoading(true)

        const body = { animals, user, type, code: ticketCode }

        try {
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

    // eslint-disable-next-line no-unused-vars
    const getTickets = async (from, to) => {
        try {
            setLoading(true)
            if (user._id) {
                const res = await request.get(`${urlApi}/gettickets/${user._id}`)
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
        setPlayingTickets
    }
}

export default useTicket