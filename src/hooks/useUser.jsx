/* eslint-disable react-hooks/exhaustive-deps */
import urlApi from "../services/urlApi"
import { useEffect } from "react"
import useLoadingStore from "../store/loadingStore"
import request from "../services/request"
import useErrorManager from "./useErrorManager"

const useUsers = () => {

    const { setLoading } = useLoadingStore()
    const errorManager = useErrorManager()

    const getUser = async (idUser) => {
        setLoading(true)

        try {
            const res = await request.post(urlApi + '/user/' + idUser)
            const user = res.data.body
            if (!user) throw 'usuario no encontrado'
            return user
            
        } catch (error) {
            errorManager(error)
        }

        setLoading(false)
    }

    useEffect(() => { getUser() }, [])
    
    return {
        getUser,
    }
}

export default useUsers