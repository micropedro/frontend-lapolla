import request from "../services/request"
import urlApi from "../services/urlApi"
import useEditUserStore from "../store/editUserStore"
import useNotify from "./useNotify"
import useErrorManager from "./useErrorManager"
import useLoadingStore from "../store/loadingStore"
import useUserStore from "../store/userStore"
// POST -> blockUser

const useBlock = () => {

    const { user } = useUserStore()
    const errorManager = useErrorManager()
    const { setLoading } = useLoadingStore()
    const { editUser, setEditUser } = useEditUserStore()
    const { notify } = useNotify()

    const handleBlock = async () => {
        setLoading(true)

        try {
            if(user.level >= editUser.level) {
                throw new Error("Sin permisos para realizar esta accion")
            }

            const response = await request.post(urlApi + "/blockUser", {
                _id: editUser._id
            })

            setEditUser({ ...editUser, block: !editUser.block })
            notify.success(response.data.message)
        } catch (error) {
            setEditUser({ ...editUser, block: editUser.block }) // se coloca el mismo valor si falla
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        handleBlock
    }
}

export default useBlock