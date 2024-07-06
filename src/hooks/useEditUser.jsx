import urlApi from "../services/urlApi"
import useLoadingStore from "../store/loadingStore"
import useNotify from "./useNotify"
import useUsers from "./useUsers"
import request from "../services/request"
import useErrorManager from "./useErrorManager"
import useEditUserStore from "../store/editUserStore"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import useUser from './useUser'
const useEditUser = () => {
    const { getUser } = useUser()
    const { editUser, setEditUser } = useEditUserStore()
    const errorManager = useErrorManager()
    const { getUsers } = useUsers()
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()

    const { id } = useParams()

    const fetchUserById = async () => {
        const user = await getUser(id)
        setEditUser(user)
    }

    useEffect(() => {
        if (Object.keys(editUser).length === 0) fetchUserById(id)
    }, [editUser])

    const handleUserType = (e) => {
        setEditUser({ ...editUser, level: e.target.value })
    }

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
            } else {
                throw "Ocurrio un error"
            }
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        sendUserForm,
        editUser,
        handleUserType
    }
}

export default useEditUser