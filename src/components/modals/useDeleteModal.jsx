import useModalStore from "../../store/modalStore"
import APIURL from "../../services/APIURL"
import useUsers from "../../hooks/useUsers"
import useLoadingModalStore from "../../store/loadingModalStore"
import request from "../../services/request"
const useDeleteUserModal = () => {
    const { setLoading, setText } = useLoadingModalStore()
    const { getUsers } = useUsers()
    const { setVisible } = useModalStore()

    const closeModal = () => setVisible(false)

    const deleteUser = async ({ _id, name }) => {
        setVisible(false)
        setText("Eliminando usuario: " + name)
        setLoading(true)
        try {
            const response = await request.post(APIURL + "/admin/deleteuser", { _id })
            if (response.data.status === 200) {
                setLoading(false)
                getUsers()
            }
        } catch (error) {
            console.log(error.response.data.message || error)
        }
    }



    return {
        closeModal,
        deleteUser
    }
}
export default useDeleteUserModal