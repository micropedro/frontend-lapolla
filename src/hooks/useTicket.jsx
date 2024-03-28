import request from "../services/request"
import urlApi from "../services/urlApi"
import useNotify from "..//hooks/useNotify"
import useTicketStore from "../store/ticketStore"
import useUserStore from "../store/userStore"
import { useNavigate } from "react-router-dom"
import { comprobacion } from "../services/utils"
import loadingStore from "../store/loadingStore"

const useTicket = () => {

    const { setLoading } = loadingStore()
    const navigate = useNavigate()
    const { user } = useUserStore()
    const { animals, type, ticketCode } = useTicketStore()
    const { notify } = useNotify()

    const handlePrint = async () => {
        setLoading(true)

        const body = { animals, user, type, code: ticketCode }

        if (!comprobacion(body)) {
            setLoading(false)
            return notify.error('Error en los datos del formulario')
        }

        try {
            const res = await request.post(`${urlApi}/tickets`, body)
            if (res) {
                navigate("/print")
            } else throw 'No se ha podido guardar el ticket'

        } catch (error) {
            console.log(error)
            notify.error(error.message || error)
        }
        setLoading(false)
    }

    return {
        handlePrint
    }
}

export default useTicket