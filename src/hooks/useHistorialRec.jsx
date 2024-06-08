import { useEffect, useState } from "react"
import permisions from "../services/permissions"
import { getAllRecargas, getRecargasOfUser } from "../controllers/recargasController"
import useLoadingStore from "../store/loadingStore"
import useErrorManager from '../hooks/useErrorManager'
export const useHistorialRec = () => {
    const errorManager = useErrorManager()
    const { setLoading } = useLoadingStore()
    const [recargas, setRecargas] = useState([])

    const getRecargas = async () => {
        try {
            setLoading(true)
            const user = permisions.getUser()
            if (user.level === 1) {
                const recargas = await getAllRecargas()
                setRecargas(recargas.data.body)
            } else if ([2, 3, 4].includes(user.level)) {
                const recargas = await getRecargasOfUser({ _id: user._id })
                setRecargas(recargas.data.body)
            } else {
                return false
            }
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getRecargas()
    }, [])

    return {
        recargas
    }
}
