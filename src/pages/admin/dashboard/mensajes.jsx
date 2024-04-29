import { useEffect } from "react"
import request from "../../../services/request"
import urlApi from "../../../services/urlApi"
const Mensajes = () => {

    useEffect(() => {
        const getUser = async (userId) => {
            const user = await request.get(urlApi + "/user/" + userId)
            console.log(user.data.body)
        }
        getUser('661d6e91f894b3a9e74ce932')
    }, [])

    return (
        <div>Mensajes</div>
    )
}

export default Mensajes