import useModalStore from "../../store/modalStore"
import urlApi from "../../services/urlApi"
import useUsers from "../../hooks/useUsers"
import useLoadingModalStore from "../../store/loadingModalStore"
import request from "../../services/request"
import useNotify from "../../hooks/useNotify"
import useErrorManager from "../../hooks/useErrorManager"

const useDeleteUserModal = () => {

    const errorManager = useErrorManager()
    const { notify } = useNotify()
    const { setLoading, setText } = useLoadingModalStore()
    const { getUsers } = useUsers()
    const { setVisible } = useModalStore()

    const closeModal = () => setVisible(false)

    const deleteUser = async ({ _id, name }) => {
        try {
            setVisible(false)
            setText("Eliminando usuario: " + name)
            setLoading(true)
            if (!_id) throw "Id es requerido, code error 1"
            const response = await request.delete(urlApi + "/admin/deleteuser/" + _id)
            if (response.data.status === 200) {
                notify.success('Usuario eliminado con exito')
                await getUsers()
            }
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        closeModal,
        deleteUser
    }
}
export default useDeleteUserModal