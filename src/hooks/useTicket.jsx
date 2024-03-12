import request from "../services/request"
import urlApi from "../services/urlApi"
import useNotify from "..//hooks/useNotify"
import useTicketStore from "../store/ticketStore"
import useUserStore from "../store/userStore"
import { useNavigate } from "react-router-dom"
import { comprobacion } from "../services/utils"

const useTicket = () => {
    const navigate = useNavigate()
    const { user } = useUserStore()
    const { animals, type } = useTicketStore()
    const { notify } = useNotify()

    const handlePrint = async () => {
        const body = { animals, user, type }

        if (!comprobacion(body)) return notify.error('Error en los datos del formulario')

        try {
            const res = await request.post(`${urlApi}/saveTicket`, body)
            if (res) {
                navigate("/print")
            } else throw 'No se ha podido guardar el ticket'

        } catch (error) {
            notify.error(error.message || error)
        }
    }

    return {
        handlePrint
    }
}

export default useTicket