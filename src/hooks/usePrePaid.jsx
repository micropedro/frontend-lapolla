import request from "../services/request"
import urlApi from "../services/urlApi"
import useEditUserStore from "../store/editUserStore"
import useNotify from "./useNotify"
import useErrorManager from "./useErrorManager"
import useLoadingStore from "../store/loadingStore"
import useUserStore from "../store/userStore"
// POST -> blockUser

const usePrePaid = () => {
    const { user } = useUserStore()
    const errorManager = useErrorManager()
    const { setLoading } = useLoadingStore()
    const { editUser, setEditUser } = useEditUserStore()
    const { notify } = useNotify()

    const handlePrePaid = async () => {
        setLoading(true)

        try {

            if (user.level >= editUser.level) {
                setLoading(false)
                throw new Error("Usuario sin permisos para realizar esta accion")
            }
            const response = await request.post(urlApi + "/prepaid", { _id: editUser._id })
            console.log(response.data.body)
            setEditUser({ ...editUser, prepaid: !editUser.prepaid })
            notify.success(response.data.message)
        } catch (error) {
            setEditUser({ ...editUser, prepaid: editUser.prepaid }) // se coloca el mismo valor si falla
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        handlePrePaid
    }
}

export default usePrePaid