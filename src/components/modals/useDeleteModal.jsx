import useModalStore from "../../store/modalStore"
import urlApi from "../../services/urlApi"
import useUsers from "../../hooks/useUsers"
import useLoadingModalStore from "../../store/loadingModalStore"
import request from "../../services/request"
import useNotify from "../../hooks/useNotify"
import useErrorManager from "../../hooks/useErrorManager"

const useDeleteUserModal = () => {
    const errorManager = useErrorManager()
    const notify = useNotify()
    const { setLoading, setText } = useLoadingModalStore()
    const { getUsers } = useUsers()
    const { setVisible } = useModalStore()

    const closeModal = () => setVisible(false)

    const deleteUser = async ({ _id, name }) => {
        setVisible(false)
        setText("Eliminando usuario: " + name)
        setLoading(true)
        try {
            const response = await request.post(urlApi + "/admin/deleteuser", { _id })
            if (response.data.status === 200) {
                setLoading(false)
                notify.success('Usuario eliminado con exito')
                getUsers()
            }
        } catch (error) {
            errorManager(error)
            setLoading(false)
            console.log(error.response.data.message || error)
        }
    }

    return {
        closeModal,
        deleteUser
    }
}
export default useDeleteUserModal