import request from "../services/request"
import urlApi from "../services/urlApi"
import useNotify from "..//hooks/useNotify"
import useTicketStore from "../store/ticketStore"
import useUserStore from "../store/userStore"
import { useNavigate } from "react-router-dom"
import loadingStore from "../store/loadingStore"
import useUsers from "../hooks/useUsers"
import useErrorManager from "./useErrorManager"
useErrorManager
const useTicket = () => {
    const errorManager = useErrorManager()
    const { setLoading } = loadingStore()
    const navigate = useNavigate()
    const { user, setUser } = useUserStore()
    const { animals, type, ticketCode, setVisible, setAnimals } = useTicketStore()
    const { notify } = useNotify()
    const { findUserByCi } = useUsers()

    const handlePrint = async () => {
        setLoading(true)

        const body = { animals, user, type, code: ticketCode }

        if (!body.animals) throw new Error("No animals")
        if (!body.user) throw new Error("No user")
        if (!body.type) throw new Error("No type")
        if (!body.code) throw new Error("No code")
        if (body.animals.length !== 6 && body.animals.length !== 3) throw "Elija animales correctamente: "+body.animals.length

        try {
            const res = await request.post(`${urlApi}/tickets`, body)
            if (res) {
                const userRefresh = await findUserByCi(user.ci)
                setUser(userRefresh)
                navigate("/print")
            } else {
                throw 'No se ha podido guardar el ticket'
            }
            setLoading(false)

        } catch (error) {
            errorManager(error)
            setLoading(false)
        }
    }

    const saveTicketClient = async () => {
        setLoading(true)

        const body = { animals, user, type, code: ticketCode }

        try {
            const res = await request.post(`${urlApi}/tickets`, body)
            if (res) {
                notify.success("Compra de ticket exitosa")
                const userRefresh = await findUserByCi(user.ci)
                setAnimals([])
                const dataLocalOld = JSON.parse(localStorage.getItem('user')) || {}
                const dataLocalRefresh = { ...dataLocalOld, ...userRefresh }
                localStorage.setItem('user', JSON.stringify(dataLocalRefresh));
                setUser(userRefresh)
            } else throw 'No se ha podido guardar el ticket'

        } catch (error) {
            console.log(error)
            notify.error(error?.response?.data?.message || error)
        } finally {
            setVisible(false)
            setLoading(false)
        }
    }

    const getTickets = async (from, to) => {
        console.log(from, to)
        try {
            setLoading(true)
            const res = await request.get(`${urlApi}/gettickets/${user._id}`)
            if (res) {
                return res.data.body
            } else throw 'Ah ocurrido un error'
        } catch (error) {
            console.log(error)
            notify.error(error.message || error)
            return []
        } finally {
            setLoading(false)
        }
    }

    return {
        handlePrint,
        saveTicketClient,
        getTickets
    }
}

export default useTicket