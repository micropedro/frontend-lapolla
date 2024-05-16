/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useErrorManager from "../hooks/useErrorManager"
import useLoadingStore from "../store/loadingStore"
import useQuinielasStore from "../store/quinielasStore"
import { getAllQuinielas } from "../controllers/quinielasController"
const useQuinielas = () => {

    const { setLoading } = useLoadingStore()
    const { quinielas, setQuinielas } = useQuinielasStore()
    const errorManager = useErrorManager()

    const getQuinielas = async () => {
        try {
            setLoading(true)
            const quinielas = await getAllQuinielas()
            console.log(quinielas.data.body)
            setQuinielas(quinielas.data.body)
        } catch (error) {
            errorManager(error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => { getQuinielas() }, [])

    return {
        quinielas
    }
}

export default useQuinielas