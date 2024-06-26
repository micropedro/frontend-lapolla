/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useErrorManager from "../hooks/useErrorManager"
import useLoadingStore from "../store/loadingStore"
import useQuinielasStore from "../store/quinielasStore"
import { getAllQuinielas, createQuiniela, closeGranQuiniela } from "../controllers/quinielasController"
import { getTiketsDeHoy, getTiketsDeAyer } from "../controllers/ticketController"
import useTicket from "./useTicket"
const useQuinielas = () => {

    const { playingTickets, setPlayingTickets } = useTicket()
    const { setLoading } = useLoadingStore()
    const { quinielas, setQuinielas, menu, setMenu } = useQuinielasStore()
    const errorManager = useErrorManager()

    const getQuinielas = async () => {
        try {
            setLoading(true)
            const quinielas = await getAllQuinielas()
            setQuinielas(quinielas.data.body)
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    const createNewQuiniela = async (tipoQuiniela) => {
        try {
            setLoading(true)
            const res = await createQuiniela(tipoQuiniela)
            if (!res) throw "Error al crear quinielas"
            await getQuinielas()
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    const handler = async (dia) => {
        setLoading(true)
        setPlayingTickets([])
        try {
            if (dia === 'ayer') {
                const res = await getTiketsDeAyer()
                console.log(res.data.body)
                setPlayingTickets(res.data.body)
            }
            if (dia === 'hoy') {
                const res = await getTiketsDeHoy()
                console.log(res.data.body)
                setPlayingTickets(res.data.body)
            }
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }

    }

    const cerrarGranQuiniela = async ()=>{
        const res = await closeGranQuiniela()
        console.log(res.data)
    }

    useEffect(() => { getQuinielas() }, [])

    return {
        quinielas,
        createNewQuiniela,
        menu, setMenu,
        handler,
        playingTickets,
        cerrarGranQuiniela
    }
}

export default useQuinielas