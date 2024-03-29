import axios from "axios"
import urlApi from "../services/urlApi"
import useLoadingStore from "../store/loadingStore"
import useNotify from "./useNotify"
import useUsers from "./useUsers"
const useEditUser = () => {
    const { getUsers } = useUsers()
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()
    const sendUserForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            ci: e.target.ci.value,
            phone: e.target.phone.value,
            level: e.target.level.value,
            _id: e.target._id.value
        }
        try {
            const response = await axios.post(urlApi + "/admin/updateuser", user)
            if (response.data.status !== 500) {
                notify.success("Se guardaron todos los cambios")
                getUsers()
            }

        } catch (error) {
            console.log(error.response.data.message || error)
            notify.error(error.response.data.message || error)
        }
        setLoading(false)
    }

    return {
        sendUserForm
    }
}

export default useEditUser