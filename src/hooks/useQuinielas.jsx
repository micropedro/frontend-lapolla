/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useErrorManager from "../hooks/useErrorManager"
import useLoadingStore from "../store/loadingStore"
import useQuinielasStore from "../store/quinielasStore"
import { getAllQuinielas, createQuiniela } from "../controllers/quinielasController"
const useQuinielas = () => {

    const { setLoading } = useLoadingStore()
    const { quinielas, setQuinielas } = useQuinielasStore()
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

    const createNewQuiniela = async () => {
        try {
            setLoading(true)
            const res = await createQuiniela()
            if (!res) throw "Error al crear quinielas"
            console.log(res)
            console.log(res.data.body.granQuiniela.validated)
            console.log(res.data.body.miniQuiniela.validated)
            await getQuinielas()
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { getQuinielas() }, [])

    return {
        quinielas,
        createNewQuiniela
    }
}

export default useQuinielas