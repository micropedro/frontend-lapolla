import { useState } from "react"
import { useEffect } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useErrorManager from "./useErrorManager"
import useUser from "./useUser"
const usePagos = () => {
    const { user } = useUser()
    const errorManager = useErrorManager()
    const [pagos, setPagos] = useState([])

    const getPagos = async () => {
        try {
            const res = await request.get(urlApi + '/transfer/recibe/' + user._id)
            console.log(res.data.body)
            setPagos(res.data.body)
        } catch (error) {
            errorManager(error)
        }
    }

    const approveTransfer = async (id) => {
        try {
            await request.put(urlApi + '/transfer/approve/' + id)
        } catch (error) {
            errorManager(error)
        } finally {
            getPagos()
        }
    }

    const declineransfer = async (id) => {
        try {
            await request.put(urlApi + '/transfer/decline/' + id)
        } catch (error) {
            errorManager(error)
        } finally {
            getPagos()
        }
    }

    useEffect(() => { getPagos() }, [])

    return {
        pagos,
        approveTransfer,
        declineransfer
    }
}

export default usePagos