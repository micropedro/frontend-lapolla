import urlApi from "../services/urlApi"
import useLoadingStore from "../store/loadingStore"
import useNotify from "./useNotify"
import useUsers from "./useUsers"
import request from "../services/request"
import useErrorManager from "./useErrorManager"
const useEditUser = () => {
    const errorManager = useErrorManager()
    const { getUsers } = useUsers()
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()

    const sendUserForm = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)

            const user = {
                name: e.target.name.value,
                email: e.target.email.value,
                ci: e.target.ci.value,
                phone: e.target.phone.value,
                level: e.target.level.value,
                _id: e.target._id.value,
                admin: e.target.admin.value,
                grupero: e.target.grupero.value,
                percent: e.target.percent.value
            }
            if (user.level > 5 || user.level < 1) throw ("Elija un tipo de usuario")
            const response = await request.post(urlApi + "/admin/updateuser", user)
            if (response) {
                getUsers()
                notify.success("Se guardaron todos los cambios")
            }
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        sendUserForm
    }
}

export default useEditUser